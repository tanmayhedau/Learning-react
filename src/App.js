import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    console.warn("constructor");
    this.state = { name: "tanmay" };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");
    return (
      <div className="App">
        <h1>component Did Mount {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "hedau" })}>update</button>
      </div>
    );
  }
}
