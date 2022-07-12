import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NutritionCentre from "./pages/NutritionCentre/NutritionCentre";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutri" element={<NutritionCentre />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
