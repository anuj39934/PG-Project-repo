import React, { Component } from "react";

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
