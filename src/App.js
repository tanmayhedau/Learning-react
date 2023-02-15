import "./App.css";
import Header from "./components/Header";
import useFetch from "./components/useFetch";

function App() {
  const [data] = useFetch(
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  );

  return (
    <div className="App">
      <Header />
      {data.map((ele, index) => {
        return <h1 key={index}>{ele.firstName}</h1>;
      })}
    </div>
  );
}

export default App;
