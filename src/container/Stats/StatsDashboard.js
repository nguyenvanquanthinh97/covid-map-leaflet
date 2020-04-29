import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { lineChart } from '../../utils/variants';
import { transformStatistics, transformStatisticsToLineChartData } from '../../utils';
import './style.scss';
import LineChart from '../../components/LineChart';

const StatsDashboard = () => {
  const [statistics, setStatistics] = useState({
    vietnam: [],
    world: []
  });

  const lineNames = [lineChart.newPatients, lineChart.recoveredPatients, lineChart.recoveringPatiens, lineChart.totalPatients];

  useEffect(() => {
    const fetchData = async () => {
      const promiseVietnamFetch = fetch('https://td.fpt.ai/corona/corona-chart-vn.json').then(res => res.json());
      const promiseWorldFetch = fetch('https://td.fpt.ai/corona/corona-total.json').then(res => res.json());

      const [vietnameData, worldData] = await Promise.all([promiseVietnamFetch, promiseWorldFetch]);

      const transformVietnamData = transformStatistics(vietnameData);

      const transformWorldData = transformStatistics(worldData);

      setStatistics({
        vietnam: transformStatisticsToLineChartData(transformVietnamData, lineNames, 'spline'),
        world: transformStatisticsToLineChartData(transformWorldData, lineNames, 'spline')
      });
    };
    fetchData();
  }, []);

  return (
    <div className="container-stats">
      <Row style={{ height: "100%" }}>
        <Col xs={6}>
          <LineChart
            data={statistics.vietnam}
            subtitle={lineChart.subtitle}
            title={lineChart.nations.Vietnam}
            axisXTitle={lineChart.time}
            axisYTitle={lineChart.numberOfPeople}
          />
        </Col>
        <Col xs={6}>
          <LineChart
            data={statistics.world}
            subtitle={lineChart.subtitle}
            title={lineChart.nations.world}
            axisXTitle={lineChart.time}
            axisYTitle={lineChart.numberOfPeople}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StatsDashboard;