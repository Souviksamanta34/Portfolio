import React, { Component } from "react";
import education from "./education.png";

export default class EducationImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={education} alt="Image Loading ..." />
    );
  }
}
