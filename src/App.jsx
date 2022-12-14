import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
// import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from "./components/User/User";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>         
          <Route path="/" element={<Home/>}/>
          {/* <Route path="about" element={<About />}/> */}
          <Route path="contact" element={<Contacts/>}/>
          <Route path="user" element={<User/>}/>
        {/* <Footer/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
