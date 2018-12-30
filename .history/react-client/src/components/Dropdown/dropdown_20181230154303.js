import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="custom-dropdown">
        <DropdownButton
          bsStyle={this.props.text.toLowerCase()}
          title={this.props.text}
        >
          <MenuItem eventKey="1">Bangalore</MenuItem>
          <MenuItem eventKey="2">Chandigarh</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

export default Dropdown;
