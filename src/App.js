import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import "@stripe/stripe-js";
import Cancel from "./pages/paymentPages/Cancel";
import Success from "./pages/paymentPages/Success";
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
