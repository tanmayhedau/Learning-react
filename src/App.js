import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  function getFormData(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Handle form in raect</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>select option</option>
          <option>marvel</option>
          <option>dc</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept terms and conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button>clear</button>
      </form>
    </div>
  );
};
export default App;
