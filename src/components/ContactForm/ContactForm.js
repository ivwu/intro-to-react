import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ivy",
      lastName: "Wu",
      email: "ivy@test.com",
      message: "I am sleepy",
    };
  }
  render() {
    const { firstName, lastName, email, message } = this.state;
    return (
      <div>
        <h1>
          Welcome to {firstName} {lastName}'s Page
        </h1>
        <h2>Contact at {email}</h2>
        <h3>Current mood: {message}</h3>
      </div>
    );
  }
}

export default ContactForm;

// 1. props are static while state can be changed (setState)
// 2. you can define the state with a constructor and super within class component
// 3. state can be updated with setState
// 4. 'create-react-app' is a framework that helps make the backbone of a react app and let's programmer start their react coding quickly. code for components will be added in the "src" folder with a components folder made within it to store all components. The `index.js` file is the entry point of the application and holds the ReactDOM rendering of the App.js. App.js is the top-level component that stores all the other components to be imported into index.js
// 5. The import/export statements are for components and it's use to allow components to be moved within and out of their own files
// 6.
// import React, { Component } from "react";

// class ContactForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "Ivy",
//       lastName: "Wu",
//       email: "ivy@test.com",
//       message: "I am sleepy",
//     };
//   }
//   render() {
//     const { firstName, lastName, email, message } = this.state;
//     return (
//       <div>
//         <h1>
//           Welcome to {firstName} {lastName}'s Page
//         </h1>
//         <h2>Contact at {email}</h2>
//         <h3>Current mood: {message}</h3>
//       </div>
//     );
//   }
// }

// export default ContactForm;
