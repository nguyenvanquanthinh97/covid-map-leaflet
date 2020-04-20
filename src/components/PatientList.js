import React, { useRef, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

import { is2FloatsEqual } from '../utils';

const PatientList = ({ patients, onPatientMarkerClicked, selectedPatient }) => {
  const selectedPatientRef = useRef(null);

  useEffect(() => {
    if (selectedPatient) {
      selectedPatientRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPatient]);

  return (
    <ListGroup>
      {patients.map((patient, index) => {
        let classNames = "list-patient__item";
        let isSelected = false;
        if (selectedPatient && is2FloatsEqual(selectedPatient.lat, patient.lat) && is2FloatsEqual(selectedPatient.lng, patient.lng)) {
          classNames += " list-patient__item--selected";
          isSelected = true;
        }
        return (
          <ListGroup.Item
            className={classNames}
            key={`${patient.name}-${index}`}
            onClick={() => { onPatientMarkerClicked(patient); }}
            ref={isSelected ? selectedPatientRef : null}
          >
            {patient.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default PatientList;