import "./Hero.css";

import Button from "../../components/Button/Button";


const Hero = () => {

    return (

        <section className="hero">


            <div className="hero-content">

                <p className="hero-tag">
                    Security-Focused Full Stack Developer
                </p>


                <h1>
                    Pravin Gyawali
                </h1>


                <p className="hero-description">
                    I build modern software systems
                    designed with performance,
                    scalability and security in mind.
                </p>


                <div className="hero-actions">

                    <Button>
                        View Projects
                    </Button>


                    <Button variant="secondary">
                        Contact Me
                    </Button>

                </div>

            </div>



            <div className="hero-visual">

                <div className="visual-card">

                    &lt;/&gt;

                </div>

            </div>


        </section>

    )

}


export default Hero;