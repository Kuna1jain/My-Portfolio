import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return <div>
    
    <section id="Homepage">
    <Navbar/>
    <Hero/>
      
    </section>
    <section id="Skills">parrallax</section>
    <section id="Portfolio">services</section>
    <section id="Achievements">portfolio</section>
    <section id="Education">portfolio3</section>
    <section id="Contact">portfolio1</section>
    <section id="About">portfolio2</section>
    
    <section>contact</section>
  </div>;
 
};

export default App;
