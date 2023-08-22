import React, { Component } from "react";
import address from "./address.jpg";

export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={address} alt="Image Loading ..." />
    );
  }
}
