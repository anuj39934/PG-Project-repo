import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

function renderMenuItems(title, i) {
  return <MenuItem eventKey={i}>{title}</MenuItem>;
}

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
          {this.props.options.map(renderMenuItems)}
        </DropdownButton>
      </div>
    );
  }
}

export default Dropdown;
