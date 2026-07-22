import "./Hero.css";

import { motion } from "motion/react";

import Button from "../../components/Button/Button";

import HeroTerminal from "../../components/HeroTerminal/HeroTerminal";

import {
    containerVariants,
    itemVariants,
    visualVariants,
} from "../../animations/variants";


const Hero = () => {

    return (

        <section className="hero">

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <motion.p
                    className="hero-role"
                    variants={itemVariants}
                >
                    Security-Focused Full Stack Developer
                </motion.p>


                <motion.h1
                    variants={itemVariants}
                >
                    Pravin Gyawali
                </motion.h1>


                <motion.p
                    className="hero-description"
                    variants={itemVariants}
                >
                    I build modern software systems designed with
                    performance, scalability and security in mind.
                </motion.p>


                <motion.div
                    className="hero-actions"
                    variants={itemVariants}
                >

                    <Button>
                        View Projects
                    </Button>


                    <Button variant="secondary">
                        Contact Me
                    </Button>

                </motion.div>


            </motion.div>



            <motion.div

                className="hero-visual"

                variants={visualVariants}

                initial="hidden"

                animate="visible"

            >

                <HeroTerminal />

            </motion.div>


        </section>

    );

};


export default Hero;