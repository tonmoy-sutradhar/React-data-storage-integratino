import reactLogo from "./assets/react.svg";
import "./App.css";
import Sunglass from "./assets/Components/Sunglass/Sunglass";
import Watch from "./assets/Components/Watch/Watch";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  // const watches = [
  //   { id: 1, name: "Apple Watch", price: 30000 },
  //   { id: 2, name: "Asus", price: 25000 },
  //   { id: 3, name: "Lenovo", price: 88000 },
  //   { id: 4, name: "Casio", price: 5000 },
  // ];

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 9",
  //     price: 399,
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 6",
  //     price: 329,
  //   },
  //   {
  //     id: 3,
  //     name: "Garmin Venu 2",
  //     price: 399,
  //   },
  //   {
  //     id: 4,
  //     name: "Fitbit Sense 2",
  //     price: 299,
  //   },
  //   {
  //     id: 5,
  //     name: "Amazfit GTR 4",
  //     price: 199,
  //   },
  // ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>React data storage integration</h2>
      <Sunglass></Sunglass>

      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
