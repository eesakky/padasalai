import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "../controls/input";
import Styles from "./gateway.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className={Styles.gateway}>
                <div className={Styles.loginForm}>
                    <Input
                        name='email'
                        type='text'
                        placeholder='Enter your email'
                        onChange={event =>
                            this.setState({ email: event.target.value })
                        }
                    />
                    <Input
                        name='password'
                        type='password'
                        placeholder='Enter your password'
                        onChange={event =>
                            this.setState({ password: event.target.value })
                        }
                    />
                    <button type='submit' onClick={this.handleSubmit}>
                        login
                    </button>
                </div>
            </div>
        );
    }

    handleSubmit() {
        console.warn(this.state.email);
    }
}

export default Login;
