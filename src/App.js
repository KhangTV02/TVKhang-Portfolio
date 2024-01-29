import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
      <SocialLink/>
    </div>
  );
}

export default App;
