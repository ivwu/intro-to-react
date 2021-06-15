import React, { Component } from "react";

class Header extends Component {
  render() {
    const { name } = this.props;
    return <h1 className="header">{name}'s Pokemon App</h1>;
  }
}

export default Header;
