import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";

function App() {
  return (
    <div className="app-no-x">
      {" "}
      {/* prevents page horizontal scroll */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
    </div>
  );
}

export default App;
