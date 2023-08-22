import React, { Component } from "react";
import cloud from "./cloud.jpg"; 

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={cloud} alt="Image Loading ..." />
    );
  }
}
