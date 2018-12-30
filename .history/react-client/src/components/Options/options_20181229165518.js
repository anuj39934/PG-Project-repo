import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Options extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "red", width: "20px" }}>
        Favorite Food: <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    );
  }
}
export default Options;
