import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/LoginPage";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";


import React from "react";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
