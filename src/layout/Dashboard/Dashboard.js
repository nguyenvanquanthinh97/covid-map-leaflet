import React from 'react';
import { Row, Col } from 'react-bootstrap';

import NavCustom from '../../components/NavCustom';
import CovidDashboard from '../../container/Covid';
import StatsDashboard from '../../container/Stats';
import './style.scss';
import { variables } from '../../utils/variants';

const Dashboard = ({ match }) => {
  const classes = ['navigation-item'];

  const { path } = match;

  return (
    <div className="container-fluid">
      <div className="navigation-items">
        <Row style={{ height: "100%" }}>
          <Col col={6} style={{ height: "100%" }}>
            <NavCustom url={'/map'} classNames={path === '/map' ? classes.concat('navigation-item--hover') : classes}>{variables.vietnamMap}</NavCustom>
          </Col>
          <Col col={6} style={{ height: "100%" }}>
            <NavCustom url={'/stats'} classNames={path === '/stats' ? classes.concat('navigation-item--hover') : classes}>{variables.statisticsMap}</NavCustom>
          </Col>
        </Row>
      </div>
      <div className="main-content">
        {path === '/map' ? <CovidDashboard /> : <StatsDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;