import React from "react";

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      count: 0,
    };

    this.inc = this.inc.bind(this);
  }

  inc() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h1>Class component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.inc}>button</button>
      </div>
    );
  }
}

export default App;
