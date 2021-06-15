import React, { Component } from "react";
import "./Counter.css";

// making inital count a global-ish variable so that it is more dynamic and can be changed without having to change number in functions as well
// another way to do this is by passing number in as a prop
// const INITAL_COUNT = 0;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      name: "Ivy",
    };
    // binding this using old JS way - new way is to use arrow syntax
    // this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = () => {
    // console.log("hi");
    //update the count state variable
    if (this.state.count < 20) {
      this.setState((currentState) => {
        // console.log(currentState);
        return {
          count: currentState.count + 1,
        };
      });
    }
  };

  handleDecrement = () => {
    // check what the current count is, if it's greater than 0, then decrement the counter
    if (this.state.count > 0) {
      this.setState((currentState) => {
        return {
          count: currentState.count - 1,
        };
      });
    }
  };

  handleReset = () => {
    this.setState({
      count: this.props.count,
    });
  };

  render() {
    // adding style dynamically depending on class

    let counterClass = this.state.count > 10 ? "Counter-active" : "";
    counterClass = this.state.count < 5 ? "Counter-low" : "";

    // ^ refractored with ternaries
    // let counterClass;
    // if (this.state.count > 10) {
    //   counterClass = "Counter-active";
    // } else if (this.state.count < 5) {
    //   counterClass = "Counter-low";
    // } else {
    //   counterClass = "";
    // }

    // // instead of using css to hide reset button, using js
    // let resetClass = this.state.count === 0 ? "no-reset" : "";

    return (
      <div className="counter-container">
        <h1>{this.state.name}'s Counter App</h1>{" "}
        <h2 className={counterClass}>{this.state.count}</h2>
        <button className="button" onClick={this.handleIncrement}>
          Increment (+)
        </button>
        <button className="button" onClick={this.handleDecrement}>
          Decrement (-)
        </button>
        {/* using JS logic to show reset button instead of css */}
        {this.state.count === this.props.count ? null : (
          <button className="button" onClick={this.handleReset}>
            Reset
          </button>
        )}
        {/* <br />
        <br />
        <input className="button"></input> */}
      </div>
    );
  }
}

export default Counter;
