import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Weather } from "../Weather/weather";
export default function PublicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Weather}></Route>
      </Routes>
    </BrowserRouter>
  );
}
