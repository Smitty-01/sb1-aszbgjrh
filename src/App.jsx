import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Tutorial from "./pages/Tutorial";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
