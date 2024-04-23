import "./App.css";
import InputCity from "./components/InputCity";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="max-w-2xl mx-auto ">
      <InputCity />
      <Weather />
    </div>
  );
}

export default App;
