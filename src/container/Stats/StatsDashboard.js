import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { get } from 'lodash';

import { lineChart, variables } from '../../utils/variants';
import { transformVietNamStatistics, transformWorldStatistics, transformStatisticsToLineChartData } from '../../utils';
import './style.scss';
import LineChart from '../../components/LineChart';
import Spinner from '../../components/Spinner';

const StatsDashboard = () => {
  const [statistics, setStatistics] = useState({
    isLoading: true,
    vietnam: [],
    world: []
  });

  const [error, setError] = useState(null);

  const lineNamesVN = [lineChart.newPatients, lineChart.recoveredPatients, lineChart.recoveringPatiens, lineChart.totalPatients];
  const lineNamesWorld = [lineChart.totalPatients, lineChart.deadPatients, lineChart.recoveredPatients];

  useEffect(() => {
    const fetchData = async () => {
      const promiseVietnamFetch = fetch('https://td.fpt.ai/corona/corona-chart-vn.json').then(res => res.json());
      const promiseWorldFetch = fetch('https://td.fpt.ai/corona/corona-total.json').then(res => res.json());

      try {
        const [vietnameData, worldData] = await Promise.all([promiseVietnamFetch, promiseWorldFetch]);

        const transformVietnamData = transformVietNamStatistics(vietnameData);
        const transformWorldData = transformWorldStatistics(worldData);

        console.log(worldData);

        setStatistics({
          isLoading: false,
          vietnam: transformStatisticsToLineChartData(transformVietnamData, lineNamesVN, 'spline'),
          world: transformStatisticsToLineChartData(transformWorldData, lineNamesWorld, 'spline')
        });
      } catch (err) {
        setError(get(err, 'TypeError', 'Fail To Fetch'));
      }

    };
    fetchData();
  }, []);

  return (
    <div className="container-stats">
      {error && <div style={{ textAlign: 'center' }}>{error}</div>}
      {(!error && statistics.isLoading) && <div style={{ textAlign: 'center' }}><Spinner /> {variables.waiting} </div>}
      {(!statistics.isLoading && !error) &&
        <Row style={{ height: "100%" }}>
          <Col xs={6}>
            <LineChart
              data={statistics.vietnam}
              subtitle={lineChart.subtitleVN}
              title={lineChart.nations.Vietnam}
              axisXTitle={lineChart.time}
              axisYTitle={lineChart.numberOfPeople}
            />
          </Col>
          <Col xs={6}>
            <LineChart
              data={statistics.world}
              subtitle={lineChart.subtitleWorld}
              title={lineChart.nations.world}
              axisXTitle={lineChart.time}
              axisYTitle={lineChart.numberOfPeople}
            />
          </Col>
        </Row>
      }
    </div>
  );
};

export default StatsDashboard;