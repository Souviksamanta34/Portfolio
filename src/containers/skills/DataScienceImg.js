import React, { Component } from "react";
import datascience from "./datascience.jpg"; 

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={datascience} alt="Image Loading ..." /> 
    );
  }
}
