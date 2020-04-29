import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Dashboard from './layout/Dashboard';

function App() {
    return (
        <div className="App-container">
            {/* <CovidDashboard /> */}
            {/* <Wrapper /> */}
            <Router>
                <Switch>
                    <Route path="/map" component={Dashboard} />
                    <Route path="/stats" component={Dashboard} />
                    <Redirect from="/" to="/map" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
