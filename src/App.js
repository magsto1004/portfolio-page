import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
