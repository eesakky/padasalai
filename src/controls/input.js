import React from "react";
import ReactDOM from "react-dom";

import "./input.scss";

class Input extends React.Component {
    render() {
        return <input type={this.props.type} className='inputStyle' />;
    }
}

export default Input;
