import React, { Component } from "react";

class Options extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "red", width: "20px" }}>
        <i class="fas fa-user"></i> <!-- uses solid style -->
  <i class="far fa-user"></i> <!-- uses regular style -->
  <i class="fal fa-user"></i> <!-- uses light style -->
  <!--brand icon-->
  <i class="fab fa-github-square"></i> <!-- uses brands style -->
      </div>
    );
  }
}
export default Options;
