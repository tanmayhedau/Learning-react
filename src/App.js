import React from "react";
import "./App.css";
import User from "./User";
import Student from './Student';

const App = () => {
  function getData() {
    alert("hello from app component");
  }
  return (
    <div className="App">
      <User data={getData} />
      <Student data={getData} />
    </div>
  );
};
export default App;
