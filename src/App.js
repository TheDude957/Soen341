import React from "react";
import { useState } from "react";
import Cart from "./Components/Cart";
import About from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import LoginPage from "./Pages/LoginPage";
import { GetUserType } from "./firebaseService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Router of the app
 * Return the page needed
 */
function App() {

  //user type visitor/customer/seller/admin
  const [userType, setUserType] = useState("visitor");
  const [cartSize, setCartSize] = useState(0);

  function notifyCartSize(n) {
    setCartSize((cartSize + n)%2);
  }
  
  async function updateUserType() {
    await GetUserType().then((type) =>{
      setUserType(type)
      }
    );
  };

  return (
    <Router>
      <Navbar userState = {userType} cartBigness = {cartSize}/>
      <Routes>
        <Route path="/" element={<HomePage notifyApp = {notifyCartSize}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage SetSignIn ={updateUserType} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart signalApp = {notifyCartSize} />} />
      </Routes>
    </Router>
  );
}

export default App;
