import React from "react";
import ReactDOM from "react-dom";

import Style from "./TextInput.scss";

class TextInput extends React.Component {
    render() {
        return (
            <input
                type={this.props.type}
                className='inputStyle'
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                name={this.props.name}
            />
        );
    }
}

export default TextInput;
