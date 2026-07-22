import { motion } from "motion/react";

import {
    containerVariants,
    itemVariants
} from "../../animations/variants";


import experience from "../../data/experience";

import TimelineItem from "../../components/TimelineItem/TimelineItem";

import "./Experience.css";


const Experience = () => {


    return (

        <section className="experience" id="experience">


            <motion.div

                className="experience-container"

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

                    ENGINEERING JOURNEY

                </motion.p>



                <motion.h2

                    variants={itemVariants}

                >

                    Building through learning and shipping.

                </motion.h2>



                <motion.p

                    className="experience-description"

                    variants={itemVariants}

                >

                    A timeline of projects, learning,
                    and continuous engineering growth.

                </motion.p>



                <div className="timeline">


                    {experience.map((item)=>(


                        <TimelineItem

                            key={item.id}

                            item={item}

                        />


                    ))}


                </div>


            </motion.div>


        </section>

    );

};


export default Experience;