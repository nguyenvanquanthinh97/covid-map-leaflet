import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

import moment from 'moment';

const DateSlider = ({ dateStart, minDays, maxDays, valueDays, onDateSliderChange }) => {
  return (
    <FormGroup>
      <FormLabel>{moment(dateStart, 'DD-MM-YYYY').add(valueDays, 'days').format("DD-MM-YYYY")}</FormLabel>
      <FormControl type="range" min={minDays} max={maxDays} value={valueDays} onChange={onDateSliderChange} step={1} custom />
    </FormGroup>
  );
};

export default DateSlider;