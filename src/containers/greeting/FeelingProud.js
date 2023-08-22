import React, { Component } from "react";
import proud from "./a.jpg";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={proud} alt="Image Loading ..." />
    );
  }
}

export default FeelingProud;
