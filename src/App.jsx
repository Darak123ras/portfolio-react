// Bad practice using Global CSS
import "./App.css";
import Navigation from './components/Navigation';
import Home from "./components/Home";
import About from './components/About'

const App = () =>{
  return (
  <div>
    {/* For the Navbar */}
    <Navigation />
    <Home />
    <About />
  </div>
  );
};

export default App;