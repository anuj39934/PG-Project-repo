import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="custom-dropdown">
        <span className="custom-dropdown-lable">{this.props.text}</span>
        <div className="custom-dropdown-carot">
          <FontAwesomeIcon icon="carot" />
        </div>
      </div>
    );
  }
}

export default Dropdown;
