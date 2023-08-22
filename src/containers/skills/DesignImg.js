import React, { Component } from "react";
import uiux from "./ui_ux.jpg"; 

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={uiux} alt="Image Loading ..." />
    );
  }
}
