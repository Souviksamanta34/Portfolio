import React, { Component } from "react";
import projects from "./pro.jpg";

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={projects} alt="Image Loading ..." />
    );
  }
}
