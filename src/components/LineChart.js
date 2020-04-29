import React from 'react';

import CanvasJSReact from '../assets/chart/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = ({ data, title, subtitle, axisXTitle, axisYTitle }) => {

  const options = {
    animationEnabled: true,
    title: {
      text: title
    },
    subtitles: [{
      text: subtitle
    }],
    axisX: {
      title: axisXTitle
    },
    axisY: {
      title: axisYTitle
    },
    toolTip: {
      shared: true
    },
    data
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default LineChart;