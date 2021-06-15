import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  }

  // handleFirstNameChange = (event) => {
  //   this.setState({ firstName: event.target.value }); //grab the value from the first name input field
  // };

  // handleLastNameChange = (event) => {
  //   this.setState({
  //     lastName: event.target.value,
  //   });
  // };

  // handleEmailChange = (event) => {
  //   this.setState({
  //     email: event.target.value,
  //   });
  // };

  // handleMessageChange = (event) => {
  //   this.setState({
  //     message: event.target.value,
  //   });
  // };

  // above methods refractored to one with event.target being able to dynamically grab which input it is referencing to

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  };

  handleReset = () => {
    this.setState({
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  render() {
    const { firstName, lastName, email, message, submitted } = this.state;
    if (!submitted) {
      return (
        <form className="Form-container" onSubmit={this.handleSubmit}>
          {" "}
          <p>
            <label htmlFor="firstName" className="Form-label">
              First Name:{" "}
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label htmlFor="lastName">
              Last Name:{" "}
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Email:{" "}
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label htmlFor="message">
              Message:{" "}
              <input
                id="message"
                type="text"
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <input type="submit" value="Submit" />{" "}
        </form>
      );
    }
    if (message === "") {
      return (
        <>
          <h1>Hey {firstName}, the message field cannot be empty</h1>
          <button onClick={this.handleReset}>Reset Form</button>
        </>
      );
    }
    return (
      <div>
        <section>
          <p>
            Thank you, {firstName}, for submitting the form with the following
            message: {message}
          </p>
          <button onClick={this.handleReset}>Reset Form</button>
        </section>
      </div>
    );
  }
}

export default ContactForm;
