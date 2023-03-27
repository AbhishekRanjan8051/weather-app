import "./App.css";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Weather } from "./components/Weather/weather";

function App() {
  return (
    <div className="">
      <Home />
      <Routes>
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
