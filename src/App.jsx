import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";

const App = () => {
  return <div>
    <section id = "Homepage">
      <Navbar/>
      <Hero/>
    </section>

    <section id = "Projects"> <Parallax type = "projects"/> </section>

    <section id = "Experiences"> <Parallax type = "experiences"/> </section>

    <section id = "Contact">Contact</section>
  </div>
};

export default App;
