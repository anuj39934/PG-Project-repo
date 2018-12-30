import React, { Component } from "react";
//import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Options extends Component {
  render() {
    return (
      <div>
        {/* Favorite Food: <FontAwesomeIcon icon="coffee" /> */}
        <FontAwesomeIcon icon= "check-square" />
        <span className="fas fa-igloo"></span>
      </div>
    );
  }
}
export default Options;
