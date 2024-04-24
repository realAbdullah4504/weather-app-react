import "./App.css";
import InputCity from "./components/InputCity";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <InputCity />
      <Weather />
    </div>
  );
}

export default App;
