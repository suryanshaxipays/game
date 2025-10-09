import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Home2Page from "./pages/Home2Page";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="app-no-x">
      {" "}
      {/* prevents page horizontal scroll */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/Home2Page" element={<Home2Page />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
