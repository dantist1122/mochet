import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';

const Main  = () => {
    return (
        <BrowserRouter>
            <Route path={'/:navs'} component={App}/>
            <Route path={'/'} exact component={App}/>
        </BrowserRouter>
    )
};

export default Main;