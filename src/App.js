import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "tanmay lumaji hedau",
    };
    console.warn("constructor");
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>Hello world {this.state.name}</h1>
      </div>
    );
  }
}
