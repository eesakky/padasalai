import React from "react";
import ReactDOM from "react-dom";

import Style from "./input.scss";

class Input extends React.Component {
    render() {
        return (
            <input
                type={this.props.type}
                className={Style.inputStyle}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default Input;
