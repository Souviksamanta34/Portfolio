import React, { Component } from "react";
import fullstack from "./full_stack.jpg"; 

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={fullstack} alt="Image Loading ..." />
    );
  }
}
