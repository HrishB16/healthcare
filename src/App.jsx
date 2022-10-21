import './App.css'
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';

function App() {

  return (
    <>
      <Navbar/>
      <Home />
      <About/>
      <Contacts/>
    </>
  );
}

export default App
