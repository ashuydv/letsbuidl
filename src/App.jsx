import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hackevents from "./pages/Hackevents";
import Communities from "./components/Communities";
import Resources from "./pages/Resources";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <div className="bg-dark">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
