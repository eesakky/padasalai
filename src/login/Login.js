import React, { Component } from "react";

import LoginWidget from "./LoginWidget";
import LoginStyles from "./Login.scss";

class Login extends React.Component {
    render() {
        return (
            <div className={LoginStyles.loginContainerFluid}>
                <div className={LoginStyles.loginImage} />
                <div className={LoginStyles.loginContainer}>
                    <LoginWidget />
                </div>
            </div>
        );
    }
}

export default Login;
