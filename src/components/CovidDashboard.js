import React, { useEffect, useState } from 'react';
import PatientInfo from "./PatientInfo";
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

import './style.scss';
import CovidMap from "./CovidMap";
import PatientList from './PatientList';

const CovidDashboard = (props) => {
    const [currentPatient, setCurrentPatient] = useState(null);
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch("https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
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
    const patientMarkerClickedHandler = (patient) => {
        setCurrentPatient(patient);
    };
    return (
        <div>
            <Row>
                <Col xs={9}><CovidMap onPatientMarkerClicked={patientMarkerClickedHandler} patients={patients} selectedPatient={currentPatient} /></Col>
                <Col xs={3}>
                    {currentPatient &&
                        <PatientInfo name={currentPatient.name} address={currentPatient.address} note={currentPatient.note}
                            verifyDate={currentPatient.verifyDate} />}
                </Col>
            </Row>
            <Row>
                <div className='list-patient'>
                    <PatientList onPatientMarkerClicked={patientMarkerClickedHandler} patients={patients} selectedPatient={currentPatient} />
                </div>
            </Row>
        </div>);
};

export default CovidDashboard;