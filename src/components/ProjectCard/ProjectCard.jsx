import { motion } from "motion/react";

import {
    itemVariants
} from "../../animations/variants";

import "./ProjectCard.css";


const ProjectCard = ({ project }) => {

    return (

        <motion.article

            className="project-card"

            variants={itemVariants}

        >


            <div className="project-header">


                <span className="project-number">

                    {project.id}

                </span>



                <span className="project-category">

                    {project.category}

                </span>


            </div>



            <h3>

                {project.title}

            </h3>



            <h4>

                {project.subtitle}

            </h4>



            <p>

                {project.description}

            </p>




            <div className="project-tech">


                {
                    project.technologies.map((tech)=>(

                        <span key={tech}>

                            {tech}

                        </span>

                    ))
                }


            </div>





            <div className="project-status">


                <span className="status-dot">

                    ●

                </span>


                {project.status}


            </div>



        </motion.article>

    );

};


export default ProjectCard;