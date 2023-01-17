import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "tanmay@test.com",
    };
  }

  render() {
    console.warn("render method", this.state.email);
    return (
      <div >
        <h1>User Component</h1>
        <button onClick={() => this.setState({ email: "hedau@test.com" })}>
          update email
        </button>
      </div>
    );
  }
}

export default User;
