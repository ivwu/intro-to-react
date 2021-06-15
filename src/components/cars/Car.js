import React, { Component } from "react";

class Car extends Component {
  render() {
    return <div>My car is {this.props.car}</div>;
  }
}

export default Car;
