import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import Login from "./login/Login.js";
import Header from "./header/Header.js";

class FlowManager extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Header} />
                    <Route path='/header' component={Header} />
                </Switch>
            </Router>
        );
    }
}

export default FlowManager;
