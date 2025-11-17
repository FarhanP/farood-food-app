import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor called");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "",
      },
    };
  }

  async componentDidMount() {
    console.log("Child Component DidMount");
    const data = await fetch("https://api.github.com/users/fox-bytep");
    const response = await data.json();
    console.log(response);
    this.setState({ userInfo: response });
  }

  componentDidUpdate() {
    console.log("Child Component DidUpdate");
  }

  componentWillUnmount() {
    console.log("Child Component WillUnmount");
  }

  render() {
    console.log("Child render called");
    const { name, location, email, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card mt-6">
        <h2 className="user-name text-themePurple font-extrabold">{name}</h2>
        <h3 className="user-location">{location}</h3>
        <h4 className="user-contact italic">{email}</h4>
        <img
          className="border-themePurple border mx-auto my-5 min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px]"
          src={avatar_url}
          alt="Github Profile"
        />
      </div>
    );
  }
}

export default UserClass;

// Life cycle

/**
 *
 *
 *     *MOUNTING*
 * Constructor (with dummy data)
 * Render (again with Dummy)
 *      <Dummy HTML>
 * ComponentDidMount is called
 *         <API Call>
 *         this.setState called -> State variable is updated -> triggers reconciliation process
 *
 *      *UPDATE*
 * Render<API DATA>
 * HTML<with API DATA>
 * ComponenetDiDUpdate is called
 *
 *
 */
