import React, { Component } from "react";
import experience from "./experience.jpg";

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={experience} alt="Image Loading ..." />
    );
  }
}
