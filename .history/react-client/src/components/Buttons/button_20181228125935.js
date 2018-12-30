import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="custom-btn">
        <button>{props.text}</button>
      </div>
    );
  }
}

export default Button;
