import reactLogo from "./assets/react.svg";
import "./App.css";
import Sunglass from "./assets/Components/Sunglass/Sunglass";
import Watch from "./assets/Components/Watch/Watch";

function App() {
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
      <Watch></Watch>
    </>
  );
}

export default App;
