import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function getData() {
      const res = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001"
      );
      const final = await res.json();
      setData(final);
      console.log(final);
      setLoading(false);
      toast.success("success");
    }

    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <div className="main">
        {loading ? (
          <Dna />
        ) : (
          data.map((e, i) => {
            return <p>{e.email}</p>;
          })
        )}
      </div>
    </div>
  );
}

export default App;
