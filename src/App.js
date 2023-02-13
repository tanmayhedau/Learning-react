import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();
    document.title = `(${state}) Employees online`
  }, [state]);

  return (
    <div className="App">
      <Header />
      <button onClick={() => setState(state + 1)}>Click me {state}</button>
      {data.map((ele, index) => {
        return (
          <div className="data" key={index}>
            <h4>{ele.firstName}</h4>
            <h4>{ele.lastName}</h4>
            <h4>{ele.email}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
