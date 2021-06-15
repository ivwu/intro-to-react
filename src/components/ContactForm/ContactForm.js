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

  render() {
    const { firstName, lastName, email, message, submitted } = this.state;
    return (
      <div>
        {/* <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <h2>{email}</h2>
        <h2>{message}</h2> */}
        <form className="Form-container" onSubmit={this.handleSubmit}>
          {!submitted ? (
            <>
              {" "}
              <label htmlFor="firstName" className="Form-label">
                First Name:
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <br />
              <label htmlFor="lastName">
                Last Name:
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <br />
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <br />
              <label htmlFor="message">
                Message:
                <input
                  id="message"
                  type="text"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <br />
              <input type="submit" value="Submit" />{" "}
            </>
          ) : (
            <section>
              <p>
                Thank you, {firstName}, for submitting the form with the
                following message: {message}
              </p>
            </section>
          )}
        </form>
      </div>
    );
  }
}

export default ContactForm;
