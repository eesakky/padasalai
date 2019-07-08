import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import TextInput from "../controls/TextInput";
import Styles from "./LoginWidget.scss";
import Email from "../base/Email";

class LoginWidget extends React.Component {
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
        this.props.history.push("/header");
    };

    render() {
        return (
            <div className={Styles.loginForm}>
                <h4>Sign In</h4>
                {this.renderEmail()}
                {this.renderPassword()}
                {this.renderForgotPassword()}
                {this.renderButton()}
                <Link to='/header'> Login</Link>
            </div>
        );
    }

    renderEmail() {
        return (
            <div className={Styles.fieldGroup}>
                <label className={Styles.label}>
                    Your Email<span className='jss323'>&thinsp;*</span>
                </label>
                <div className={Styles.inputControl}>
                    <Email
                        onChange={this.handleChange}
                        className={Styles.inputField}
                    />
                </div>
            </div>
        );
    }

    renderPassword() {
        return (
            <div className={Styles.fieldGroup}>
                <label className={Styles.label}>
                    Your Email<span className='jss323'>&thinsp;*</span>
                </label>
                <div className={Styles.inputControl}>
                    <TextInput
                        name='password'
                        type='password'
                        onChange={this.handleChange}
                        className={Styles.inputField}
                    />
                </div>
            </div>
        );
    }

    renderForgotPassword() {
        return (
            <div className={Styles.troubleInLogin}>
                <label className={Styles.remember}>
                    <TextInput
                        className='jss380'
                        name='checkbox'
                        type='checkbox'
                    />
                    <span className='jss234'>Remember</span>
                </label>
                <a className={Styles.forgotPassword} tabindex='0' role='button'>
                    <span className='jss271'>Forgot Password</span>
                    <span className='jss98' />
                </a>
            </div>
        );
    }

    renderButton() {
        return (
            <button
                type='submit'
                className={Styles.loginButton}
                onClick={this.handleSubmit.bind(this)}>
                Login
            </button>
        );
    }
}

export default LoginWidget;
