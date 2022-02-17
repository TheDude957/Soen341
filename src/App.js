import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Test1 from './test1';
import Test2 from './test2';
function App() {
  return (
    <Router>
      <nav>
        <Link to = "/"> Home Page</Link>
        <Link to = "/test2"> About Page</Link>
      </nav>
      <Routes>
        <Route path ="/" element ={<Test1/>}/>
        <Route path="/test2" element = {<Test2/>}/>
      </Routes>


    </Router>
  );
}

export default App;
