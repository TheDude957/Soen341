import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
/*import Test1 from './test1';
import Test2 from './test2';
import Navbar from './Components/Navbar.js'*/
import SignUp from './Components/SignUp.js'
import React from 'react';
function App() {
  return (
    <>
    <Router>
      <SignUp/>
    </Router>
    </>
    /*<>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ="/" element ={<Test1/>}/>
        <Route path="/test2" element = {<Test2/>}/>
      </Routes>

    </Router>
    </>*/
  );
}

export default App;