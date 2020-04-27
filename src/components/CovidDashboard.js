import React, { Fragment, useEffect, useState, useReducer } from 'react';
import PatientInfo from "./PatientInfo";
import { Row, Col } from 'react-bootstrap';
import { FaPlay, FaStop } from 'react-icons/fa';
import moment from 'moment';

import './style.scss';
import CovidMap from "./CovidMap";
import PatientList from './PatientList';
import DateSlider from './DateSlider';

const CovidDashboard = (props) => {
    const [currentPatientIdx, setCurrentPatientIdx] = useState(null);
    const [patients, setPatients] = useState([]);
    const [days, setDays] = useState(0);
    const [isStop, setIsStop] = useState(true);

    const currentPatients = [];
    const dateStart = '08-12-2019';
    const dateNow = moment(Date.now());
    const diffFromNow = dateNow.diff(moment(dateStart, 'DD-MM-YYYY'), 'days');

    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
            .then(res => res.json())
            .then(
                (result) => {
                    const patients = result.data;
                    const sortedPatients = patients.sort((p1, p2) => new moment(p2.verifyDate) - new moment(p1.verifyDate));

                    setPatients(sortedPatients);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                }
            );
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
    }, [isStop]);

    const handlePatientsDateSelected = (days) => {
        const selectedPatients = patients.filter(patient => {
            const verifyDate = moment(patient.verifyDate);
            return verifyDate.isSameOrBefore(moment(dateStart, 'DD-MM-YYYY').add(days, 'days'));
        });
        return selectedPatients;
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
            <Row className="main-content">
                <Col xs={9} style={{ height: "100%" }}><CovidMap onPatientMarkerClicked={patientMarkerClickedHandler} patients={currentPatients} selectedPatientIdx={currentPatientIdx} /></Col>
                <Col xs={3} style={{ height: "100%" }}>
                    <Row className="patient-info">
                        {(currentPatientIdx !== null) &&
                            <PatientInfo name={patients[currentPatientIdx].name} address={currentPatients[currentPatientIdx].address} note={currentPatients[currentPatientIdx].note}
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
        </Fragment>);
};

export default CovidDashboard;