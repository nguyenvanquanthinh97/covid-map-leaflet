import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { is2FloatsEqual } from '../utils';

const CovidMap = ({ onPatientMarkerClicked, patients, selectedPatient }) => {

    const openPopup = (marker) => {
        if (marker && marker.leafletElement) {
            marker.leafletElement.openPopup();
        }
    };

    return (
        <Map center={selectedPatient ? [selectedPatient.lat, selectedPatient.lng] : [10.762887, 106.6800684]} zoom={13}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.osm.org/{z}/{x}/{y}.png   "
            />
            {patients && patients.map((patient, idx) => {
                let isSelected = false;
                if (selectedPatient && is2FloatsEqual(selectedPatient.lat, patient.lat) && is2FloatsEqual(selectedPatient.lng, patient.lng)) {
                    isSelected = true;
                }
                return (
                    <Marker ref={isSelected ? openPopup : null} key={`${patient.name}-${idx}`} position={[patient.lat, patient.lng]} onClick={() => { onPatientMarkerClicked(patient); }}>
                        <Popup>
                            <ul>
                                <li>Name: {patient.name}</li>
                                <li>Address: {patient.address}</li>
                                <li>Note: {patient.note}</li>
                                <li>Verify date: {patient.verifyDate}</li>
                            </ul>
                        </Popup>
                    </Marker>);
            }
            )}
        </Map>
    );
};

export default CovidMap;
