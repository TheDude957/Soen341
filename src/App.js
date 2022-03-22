import React from "react";
import { useState } from "react";
import Cart from "./Components/Cart";
import About from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import AddItem from "./Components/AddItem.js";
import MyProducts from "./Components/MyProducts";
import EditProfile from "./Components/EditProfile";
import { GetCurrentUserInformation } from "./firebaseService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Router of the app
 * Return the page needed
 */
function App() {

  //user type visitor/customer/seller/admin
  const [userType, setUserType] = useState("visitor");
  const [cartSize, setCartSize] = useState(0);
  const [userInfo, setUserInfo] = useState();

  function notifyCartSize(n) {
    setCartSize((cartSize + n)%2);
  }
  
  async function updateUserType() {
    await GetCurrentUserInformation().then((user) =>{
      setUserType(user.userType);
      setUserInfo(user);
      }
    );
  };

  return (
    <Router>
      <Navbar userState = {userType} cartBigness = {cartSize} user = {userType}/>
      <Routes>
        <Route path="/"  element={<HomePage notifyApp = {notifyCartSize} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage SetSignIn ={updateUserType} />} />
        <Route path="/profilePage" element={<ProfilePage user = {userInfo}/>} >
            <Route path="addItem"  element={<AddItem  />} />
            <Route path="editprofile"  element={<EditProfile  />} />
            <Route path="myproducts"  element={<MyProducts  />} />
        </Route>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/cart" element={<Cart signalApp = {notifyCartSize} />} />
      </Routes>
    </Router>
  );
}

export default App;
