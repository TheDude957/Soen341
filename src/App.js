import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/LoginPage";
import Cart from "./Components/Cart";
import SignUp from "./Components/SignUp";

import React from "react";
/**
 * Router of the app
 * Return the page needed
 */
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
