import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Skills from "./components/skills/Skills";
const App = () => {
  return <div>
    
    <section id="Homepage">
    <Navbar/>
    <Hero/>
      
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section id="Portfolio"> <Skills/> </section>
    <section id="Achievements"><Parallax type="portfolio"/></section>
    <section id="Education">portfolio3</section>
    <section id="Contact">portfolio1</section>
    <section id="About">portfolio2</section>
    
    <section>contact</section>
  </div>;
 
};

export default App;
