import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Test1 from "./test1";
import Test2 from "./test2";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import React from "react";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
