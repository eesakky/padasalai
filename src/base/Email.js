import React, { Component } from "react";

class Email extends React.Component {
    render() {
        return (
            <input
                type='email'
                name='email'
                placeholder='Enter Your Email'
                onChange={this.props.onChange}
            />
        );
    }
}

export default Email;
