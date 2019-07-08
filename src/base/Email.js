import React, { Component } from "react";

class Email extends React.Component {
    render() {
        return (
            <input
                type='email'
                name='email'
                placeholder={this.props.placeHolder}
                onChange={this.props.onChange}
                className={this.props.className}
            />
        );
    }
}

export default Email;
