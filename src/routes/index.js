import React from 'react';
import { Router, Redirect, IndexRoute, Route, browserHistory } from 'react-router';
import App from "../App";
import Home from '../pages/Home';
import TeamEdit from '../pages/TeamEdit';

export default (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="team/:id" component={TeamEdit} />
            <Redirect from="*" to="/" />
        </Route>
    </Router>
);
