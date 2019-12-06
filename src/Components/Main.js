import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from "../history";

import App from './App';

const Main  = () => {
    return (
        <Router history={history}>
            <Route path={'/:navs'} component={App}/>
            <Route path={'/'} exact component={App}/>
        </Router>
    )
};

export default Main;