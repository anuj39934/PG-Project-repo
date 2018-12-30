import React, { Component } from "react";
import './styles.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="custom-btn">
        <button>{this.props.text}</button>
      </div>
    );
  }
}

export default Button;
