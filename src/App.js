import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import ComA from "./components/ComA";

const AppState = createContext();
const ObjState = createContext();

function App() {
  const [data, setData] = useState("web3Mantra");
  const [obj, setObj] = useState({ name: "tanmay", age: "22" });

  return (
    <div className="App">
      <AppState.Provider value={data}>
        <ObjState.Provider value={{ obj }}>
          <Header />
          <ComA />
        </ObjState.Provider>
      </AppState.Provider>
    </div>
  );
}

export default App;
export { AppState, ObjState };
