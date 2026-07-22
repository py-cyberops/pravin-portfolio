import "./Home.css";

import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Skills from "../../sections/Skills/Skills";
import Experience from "../../sections/Experience/Experience";
import Certifications from "../../sections/Certifications/Certifications";
import Contact from "../../sections/Contact/Contact";


const Home = () => {

    return (

        <main>

            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Certifications />
            <Contact />
        </main>

    )

}


export default Home;