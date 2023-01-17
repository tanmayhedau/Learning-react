import React from "react";
import User from "./User";

const App = () => {
  const [name, setName] = React.useState("tanmay");
  console.warn("function", {name});
  return (
    <div className="App">
      <h1>Render method in React</h1>
      <User name={name} />
      <button onClick={() => setName("hedau")}>Update name</button>
    </div>
  );
};

export default App;
