import { func } from "prop-types";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {

  const [num,setNum] = useState(1);
  function inc(){
    setNum(num+1)
  }

  function dec(){
    setNum(num-1)
  }

  return (
    <div className="App">
      <Header /> 
      <div className="main">
        <h1 className="heading">{num}</h1>
        <button className="btn" onClick={inc}>increment</button>
        <button className="btn" onClick={dec}>decrement</button>
      </div>
    </div>
  );
}

export default App;
