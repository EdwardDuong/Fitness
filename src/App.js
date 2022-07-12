import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NutritionCentre from "./pages/NutritionCentre/NutritionCentre";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutri" element={<NutritionCentre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
