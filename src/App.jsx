import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resources from "./pages/Resources";
import Blogs from "./pages/Blogs";
import Communities from "./pages/Communities";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Courses from "./components/Courses";

const firebaseConfig = {
  apiKey: "AIzaSyC8DvNUl6nUU5lVhWupqsPOAsR4LnyK48o",
  authDomain: "commbuidl-3ccf5.firebaseapp.com",
  projectId: "commbuidl-3ccf5",
  storageBucket: "commbuidl-3ccf5.appspot.com",
  messagingSenderId: "584066631162",
  appId: "1:584066631162:web:b87b9c19330d488d269043",
  measurementId: "G-22VJCCDELC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <div className="bg-dark">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communities" element={<Courses />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/add-community" element={<Communities />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
