import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test1 from "./test1";
import Test2 from "./test2";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/LoginPage";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import ProductSearch from "./Components/ProductSearch";


import React from "react";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ProductSearch />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
