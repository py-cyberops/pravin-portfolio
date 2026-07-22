import { motion } from "motion/react";

import {
    containerVariants,
    itemVariants
} from "../../animations/variants";


import skills from "../../data/skills";

import SkillGroup from "../../components/SkillGroup/SkillGroup";

import "./Skills.css";


const Skills = () => {


    return (

        <section className="skills" id="skills">


            <motion.div

                className="skills-container"

                variants={containerVariants}

                initial="hidden"

                whileInView="visible"

                viewport={{
                    once: true,
                    amount: 0.2
                }}

            >


                <motion.p

                    className="section-label"

                    variants={itemVariants}

                >

                    ENGINEERING STACK

                </motion.p>



                <motion.h2

                    variants={itemVariants}

                >

                    Technologies behind my engineering workflow.

                </motion.h2>



                <motion.p

                    className="skills-description"

                    variants={itemVariants}

                >

                    A growing engineering stack focused on
                    full-stack development, cloud infrastructure,
                    and secure software practices.
                </motion.p>



                <div className="skills-grid">


                    {skills.map((group) => (


                        <SkillGroup

                            key={group.id}

                            group={group}

                        />


                    ))}


                </div>


            </motion.div>


        </section>

    );

};


export default Skills;