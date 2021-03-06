import React, { Component } from "react";

const logo = require("../images/wheel.png");

const styleBrand = {
  color: "white",
  "background-color": "black",
  display: "flex",
  "justify-content": "flex-start",
  padding: "10px 0 5px 10px"
};

const styleLogo = {
  height: "40px",
  "padding-left": "5px"
};

class Header extends Component {
  render() {
    return (
      <div style={styleBrand}>
        <h1>SmartShare</h1>
        <img src={logo} style={styleLogo} alt="Logo" />
      </div>
    );
  }
}

export default Header;
