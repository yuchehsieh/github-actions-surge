import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../layouts/Home';
import Page1 from '../layouts/Page1';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/" component={HomePage} />
            </Switch>
        </Router>
    );
};

export default Routes;
