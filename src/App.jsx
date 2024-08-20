// Bad practice using Global CSS
import "./App.css";
import Navigation from './components/Navigation';
import Home from "./components/home";

const App = () =>{
  return (
  <div>
    {/* For the Navbar */}
    <Navigation />
    <Home />
  </div>
  );
};

export default App;