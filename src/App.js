import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/home";
import About from "./screens/about";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = `bg-${mode}`;
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`App bg-${mode} text-${mode === "dark" ? "light" : "dark"}`}
    >
      <BrowserRouter>
      <Navbar toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home mode={mode}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
