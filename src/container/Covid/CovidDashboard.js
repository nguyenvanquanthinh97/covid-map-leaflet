import React, { Fragment, useEffect, useState } from 'react';
import PatientInfo from "../../components/PatientInfo";
import { Row, Col } from 'react-bootstrap';
import { FaPlay, FaStop } from 'react-icons/fa';
import moment from 'moment';
import { get } from 'lodash';

import './style.scss';
import CovidMap from "../../components/CovidMap";
import PatientList from '../../components/PatientList';
import DateSlider from '../../components/DateSlider';
import Spinner from '../../components/Spinner';
import {variables} from '../../utils/variants';

const CovidDashboard = (props) => {
    const [currentPatientIdx, setCurrentPatientIdx] = useState(null);
    const [patients, setPatients] = useState({
        isLoading: true,
        data: []
    });
    const [days, setDays] = useState(0);
    const [isStop, setIsStop] = useState(true);
    const [error, setError] = useState(null);

    const currentPatients = [];
    const dateStart = '08-12-2019';
    const dateNow = moment(Date.now());
    const diffFromNow = dateNow.diff(moment(dateStart, 'DD-MM-YYYY'), 'days');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch("https://cors-anywhere.herokuapp.com/https://maps.vnpost.vn/apps/covid19/api/patientapi/list").then(res => res.json());

                const patients = result.data;
                const sortedPatients = patients.sort((p1, p2) => new moment(p2.verifyDate) - new moment(p1.verifyDate));

                setPatients({
                    isLoading: false,
                    data: sortedPatients
                });
            } catch (err) {
                setError(get(err, 'TypeError', 'Fail To Fetch'));
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let idInterval = null;
        if (!isStop) {
            idInterval = setInterval(() => {
                setDays(days => {
                    if (days > diffFromNow) {
                        return 0;
                    }
                    return days + 1;
                });
            }, 2000);
        }

        if (isStop) {
            clearInterval(idInterval);
        }
        return () => clearInterval(idInterval);
    }, [isStop, diffFromNow]);

    const handlePatientsDateSelected = (days) => {
        const patientsData = get(patients, 'data', []);
        const firstSelectedPatientIndex = patientsData.findIndex(patient => {
            const verifyDate = moment(patient.verifyDate);
            return verifyDate.isSameOrBefore(moment(dateStart, 'DD-MM-YYYY').add(days, 'days'));
        });
        return patientsData.slice(firstSelectedPatientIndex);
    };

    const patientMarkerClickedHandler = (patientIdx) => {
        setCurrentPatientIdx(patientIdx);
    };

    const dateSliderChangeHandler = (event) => {
        const days = event.target.value;
        setDays(Number(days));
    };

    const buttonControlClickHandler = () => {
        setIsStop(!isStop);
    };

    currentPatients.push(...handlePatientsDateSelected(days));

    return (
        <Fragment>
            {error && <div style={{textAlign: 'center'}}>{error}</div>}
            {(!error && patients.isLoading) &&  <div style={{textAlign: 'center'}}><Spinner /> {variables.waiting} </div>}
            {(!patients.isLoading && !error) &&
                (<Fragment>
                    <Row className="container__map-info-list">
                        <Col xs={9} style={{ height: "100%" }}><CovidMap onPatientMarkerClicked={patientMarkerClickedHandler} patients={currentPatients} selectedPatientIdx={currentPatientIdx} /></Col>
                        <Col xs={3} style={{ height: "100%" }}>
                            <Row className="patient-info">
                                {(currentPatientIdx !== null) &&
                                    <PatientInfo name={currentPatients[currentPatientIdx].name} address={currentPatients[currentPatientIdx].address} note={currentPatients[currentPatientIdx].note}
                                        verifyDate={currentPatients[currentPatientIdx].verifyDate} />}
                            </Row>
                            <Row className='list-patient'>
                                <PatientList onPatientMarkerClicked={patientMarkerClickedHandler} patients={currentPatients} selectedPatientIdx={currentPatientIdx} />
                            </Row>
                        </Col>
                    </Row>
                    <Row className="container__seek-bar">
                        <div className="button-control" onClick={buttonControlClickHandler}>
                            {isStop ? <FaPlay className="button" /> : <FaStop className="button" />}
                        </div>
                        <div className="seek-bar">
                            <DateSlider dateStart={dateStart} minDays={0} maxDays={diffFromNow} valueDays={days} onDateSliderChange={dateSliderChangeHandler} />
                        </div>
                    </Row>
                </Fragment>)}
        </Fragment>);
};

export default CovidDashboard;