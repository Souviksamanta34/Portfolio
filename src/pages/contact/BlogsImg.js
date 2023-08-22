import React, { Component } from "react";
import proud from "./blog.jpg";

export default class BlogsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={proud} alt="Image Loading ..." />
    );
  }
}
