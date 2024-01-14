import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen bg-gray-500">
        <Navbar />
        <main className="container mx-auto px-4 mb-auto">
          <Routes>
            <Route path="/"  element={<Home />} /> {/* Important so that default is the home page, and avoids errors */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element= {<Projects />} />
            <Route path="/contact"element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
