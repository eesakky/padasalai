import React from "react";
import ReactDOM from "react-dom";

import Style from "./TextInput.scss";

class TextInput extends React.Component {
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

export default TextInput;
