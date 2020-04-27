import React, { useRef, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

const PatientList = ({ patients, onPatientMarkerClicked, selectedPatientIdx }) => {
  const selectedPatientRef = useRef(null);

  useEffect(() => {
    if (selectedPatientIdx) {
      selectedPatientRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedPatientIdx]);

  return (
    <ListGroup style={{width: "100%"}}>
      {patients.map((patient, index) => {
        let classNames = "list-patient__item";
        let isSelected = false;
        if (selectedPatientIdx === index) {
          classNames += " list-patient__item--selected";
          isSelected = true;
        }
        return (
          <ListGroup.Item
            className={classNames}
            key={`${patient.name}-${index}`}
            onClick={() => { onPatientMarkerClicked(index); }}
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