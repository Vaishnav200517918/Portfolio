import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project/Project";
import Sliderinfinite from "./components/Sliderinfinite/Sliderinfinite";
function App() {
  return (
    <div className="App md:mt-16 mt-16">
      <Navbar />
      <Home />
      <Sliderinfinite degree="rotate-3" />
      <About />
      <Project />
    </div>
  );
}

export default App;
