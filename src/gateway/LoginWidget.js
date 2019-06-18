import React, { Component } from "react";
import ReactDOM from "react-dom";

import TextInput from "../controls/TextInput";
import Styles from "./Gateway.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit() {
        console.warn(this.state.email);
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className={Styles.gateway}>
                <div className={Styles.loginForm}>
                    <TextInput
                        name='email'
                        type='text'
                        placeholder='Enter your email'
                        onChange={this.handleChange}
                    />
                    <TextInput
                        name='password'
                        type='password'
                        placeholder='Enter your password'
                        onChange={this.handleChange}
                    />
                    <button
                        type='submit'
                        onClick={this.handleSubmit.bind(this)}>
                        login
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;
