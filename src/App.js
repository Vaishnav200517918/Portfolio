import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project/Project";
import Sliderinfinite from "./components/Sliderinfinite/Sliderinfinite";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App md:mt-16 mt-16">
      <Navbar />
      <Home />
      <Sliderinfinite degree="rotate-3" />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
