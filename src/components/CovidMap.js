import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const CovidMap = ({ onPatientMarkerClicked, patients, selectedPatientIdx }) => {

    const openPopup = (marker) => {
        if (marker && marker.leafletElement) {
            marker.leafletElement.openPopup();
        }
    };

    return (
        <Map center={selectedPatientIdx ? [patients[selectedPatientIdx].lat, patients[selectedPatientIdx].lng] : [10.762887, 106.6800684]} zoom={13}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.osm.org/{z}/{x}/{y}.png   "
            />
            {patients && patients.map((patient, idx) => {
                let isSelected = false;
                if (selectedPatientIdx === idx) {
                    isSelected = true;
                }
                return (
                    <Marker ref={isSelected ? openPopup : null} key={`${patient.name}-${idx}`} position={[patient.lat, patient.lng]} onClick={() => { onPatientMarkerClicked(idx); }}>
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
