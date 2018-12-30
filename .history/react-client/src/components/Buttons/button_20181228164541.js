import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="custom-btn">
        <button style = {this.props.styling}>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
