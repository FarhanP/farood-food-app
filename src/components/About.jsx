import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// Class based component
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parent Component DidMount");
  }

  render() {
    console.log("Parent render called");
    return (
      <div className="text-center font-semibold text-3xl sm:text-2xl mt-8">
        <h1>About</h1>
        <UserClass
          name={"Mohamed Farhan"}
          location={"Bengaluru"}
          email={"pmdfarhan@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
