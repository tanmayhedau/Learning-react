import React, { Component } from "react";

export default class Comp extends Component {
  componentWillUnmount() {
    alert("component will get removed");
  }
  render() {
    return (
      <div>
        <h1>Child comp</h1>
      </div>
    );
  }
}
