import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./login/Login.js";
import Header from "./header/Header.js";

class FlowManager extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' component={Login} />
                <Route path='/header' component={Header} />
            </Router>
        );
    }
}

export default FlowManager;
