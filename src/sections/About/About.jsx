import "./About.css";

import { motion } from "motion/react";

import {
    containerVariants,
    itemVariants
} from "../../animations/variants";
import Principles from "../../components/Principles/Principles";


const About = () => {

    return (

        <section className="about">


            <motion.div

                className="about-container"

                variants={containerVariants}

                initial="hidden"

                whileInView="visible"

                viewport={{
                    once: true,
                    amount: 0.3
                }}

            >


                <motion.p

                    className="section-label"

                    variants={itemVariants}

                >
                    ENGINEERING PROFILE

                </motion.p>



                <motion.h2

                    variants={itemVariants}

                >

                    Building secure,
                    scalable software systems.

                </motion.h2>



                <motion.p

                    className="about-description"

                    variants={itemVariants}

                >

                    I am a security-focused full stack developer
                    who builds modern applications with clean
                    architecture, strong engineering practices,
                    and scalability in mind.

                </motion.p>



                <motion.div

                    className="about-grid"

                    variants={containerVariants}

                >


                    <motion.div

                        className="about-card"

                        variants={itemVariants}

                    >

                        <h3>
                            Focus
                        </h3>


                        <ul>

                            <li>
                                Full Stack Engineering
                            </li>

                            <li>
                                Cloud Infrastructure
                            </li>

                            <li>
                                Cybersecurity
                            </li>

                        </ul>


                    </motion.div>



                    <motion.div

                        className="about-card"

                        variants={itemVariants}

                    >

                        <h3>
                            Philosophy
                        </h3>


                        <ul>

                            <li>
                                Build clean
                            </li>

                            <li>
                                Secure deeply
                            </li>

                            <li>
                                Scale intelligently
                            </li>

                        </ul>


                    </motion.div>




                </motion.div>
                <Principles />

            </motion.div>


        </section>

    );

};


export default About;