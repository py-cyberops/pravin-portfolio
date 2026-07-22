import { motion } from "motion/react";

import {
    containerVariants,
    itemVariants
} from "../../animations/variants";

import projects from "../../data/projects";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Projects.css";


const Projects = () => {


    return (

        <section className="projects" id="projects">


            <motion.div

                className="projects-container"

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

                    FEATURED PROJECTS

                </motion.p>



                <motion.h2

                    variants={itemVariants}

                >

                    Systems I am building.

                </motion.h2>



                <motion.p

                    className="projects-description"

                    variants={itemVariants}

                >

                    A collection of software projects focused on
                    engineering, security, and scalable systems.

                </motion.p>



                <div className="projects-grid">


                    {projects.map((project)=>(


                        <ProjectCard

                            key={project.id}

                            project={project}

                        />


                    ))}


                </div>


            </motion.div>


        </section>

    );


};


export default Projects;