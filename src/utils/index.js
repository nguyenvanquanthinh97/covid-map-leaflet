import { get } from 'lodash';

export const is2FloatsEqual = (f1, f2) => {
  const precision = 0.00000000000001;

  if (Math.abs(f1 - f2) <= precision) {
    return true;
  }
  return false;
};

export const sum = (arr) => {
  return arr.reduce((total, el) => total + el, 0);
};

export const transformVietNamStatistics = (statisticObject) => {
  let oldNewPatientsData = 0;
  return Object.keys(statisticObject).map(key => {
    const totalPatients = statisticObject[key][0];
    const recoveredPatients = statisticObject[key][2];
    const recoveringPatients = totalPatients - recoveredPatients;
    const newPatient = totalPatients - oldNewPatientsData;
    oldNewPatientsData = totalPatients;
    return {
      [key]: [newPatient, recoveredPatients, recoveringPatients, totalPatients]
    };
  });
};

export const transformWorldStatistics = (statisticObject) => {
  return Object.keys(statisticObject).map(key => ({
    [key]: [...get(statisticObject, key)]
  }));
};

export const transformStatisticsToLineChartData = (data, lineNames, typeChart) => {
  const dataLine = [];
  const numLine = lineNames.length;
  const dataLength = data.length;
  for (let line = 0; line < numLine; line++) {
    const dataPoints = [];
    for (let point = 0; point < dataLength; point++) {
      const key = Object.keys(data[point])[0];
      dataPoints.push({ y: get(data[point], key)[line], label: key });
    }
    dataLine.push({
      type: typeChart,
      name: lineNames[line],
      showInLegend: true,
      dataPoints
    });
  }
  return dataLine;
};