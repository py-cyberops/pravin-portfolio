import { motion } from "motion/react";

import {
    containerVariants,
    itemVariants
} from "../../animations/variants";

import "./Contact.css";


const Contact = () => {


    return (

        <section className="contact">


            <motion.div

                className="contact-container"

                variants={containerVariants}

                initial="hidden"

                whileInView="visible"

                viewport={{
                    once:true,
                    amount:0.2
                }}

            >


                <motion.p

                    className="section-label"

                    variants={itemVariants}

                >

                    CONTACT

                </motion.p>



                <motion.h2

                    variants={itemVariants}

                >

                    Let's build something meaningful.

                </motion.h2>



                <motion.p

                    className="contact-description"

                    variants={itemVariants}

                >

                    Open to software engineering opportunities,
                    freelance projects, and collaborations focused
                    on building secure and scalable systems.

                </motion.p>



                <motion.div

                    className="contact-links"

                    variants={itemVariants}

                >


                    <a

                        href="mailto:pypravin.cyberops@gmail.com"

                    >

                        Email

                    </a>



                    <a

                        href="https://github.com/py-cyberops"

                        target="_blank"

                        rel="noopener noreferrer"

                    >

                        GitHub

                    </a>



                    <a

                        href="https://www.linkedin.com/in/pravingyawali"

                        target="_blank"

                        rel="noopener noreferrer"

                    >

                        LinkedIn

                    </a>


                </motion.div>


            </motion.div>


        </section>

    );

};


export default Contact;