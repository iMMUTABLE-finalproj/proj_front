import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './mainPage/Main';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Cart from './pages/Cart';
import FindEmail from './pages/FindEmail';
import FindPwd from './pages/FindPwd';
import Shop from './shopPage/Shop';
import TOP from './shopPage/Top';
import FAQ from './pages/Faq';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>        
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/FindEmail" element={<FindEmail/>}/>
        <Route path="/FindPwd" element={<FindPwd/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Top" element={<TOP/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
      </Routes>
     </Router>

  );
}

export default App;
