import React, { Component } from "react";
import  { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons';

class Options extends Component {
  render() {
    return (
      <div style = { {backgroundColor : "red", width : "20px"}}>
        <div style = {{width : "20px"}}><i className="fa fa-home" ></i></div>
            <FontAwesomeIcon icon= 'igloo' />
      </div>
    );
  }
}
export default Options;
