import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./login/Login.js";
import Header from "./header/Header.js";

class SiteManager extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/header' component={Header} />
            </Switch>
        );
    }
}

export default SiteManager;
