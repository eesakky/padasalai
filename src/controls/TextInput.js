import React from "react";
import ReactDOM from "react-dom";

class TextInput extends React.Component {
    render() {
        return (
            <input
                type={this.props.type}
                className={this.props.className}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                name={this.props.name}
            />
        );
    }
}

export default TextInput;
