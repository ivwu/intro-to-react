import React, { Component } from "react";

class Person extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        Hi, my name is {firstName} {lastName}
      </div>
    );
  }
}

export default Person;
