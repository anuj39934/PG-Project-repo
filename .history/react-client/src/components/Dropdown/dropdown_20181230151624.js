import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Glyphicon } from 'react-bootstrap/lib/Glyphicon';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="custom-dropdown">
        <span className="custom-dropdown-lable">{this.props.text}<span className="glyphicon glyphicon-envelope"></span></span>
        <div className="custom-dropdown-carot">
          {/* <FontAwesomeIcon icon="angle-down" /> */}
          <Glyphicon glyph="star" />
        </div>
      </div>
    );
  }
}

export default Dropdown;
