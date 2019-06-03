import React, { Component } from "react";
import ReactDOM from "react-dom";

import Input from "../controls/input";
import "./gateway.scss";

class Login extends React.Component {
    render() {
        return (
            <div className='gateway'>
                <form className='loginForm'>
                    <Input type='text' />
                    <Input type='password' />
                    <button>login</button>
                </form>
            </div>
        );
    }
}

export default Login;
