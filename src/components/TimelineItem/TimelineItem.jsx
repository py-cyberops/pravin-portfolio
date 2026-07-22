import { motion } from "motion/react";

import {
    itemVariants
} from "../../animations/variants";

import "./TimelineItem.css";


const TimelineItem = ({ item }) => {


    return (

        <motion.article

            className="timeline-item"

            variants={itemVariants}

        >

            <div className="timeline-year">

                <span className="timeline-dot"></span>

                {item.year}

            </div>


            <div className="timeline-content">


                <span className="timeline-type">

                    {item.type}

                </span>


                <h3>

                    {item.title}

                </h3>


                <p>

                    {item.description}

                </p>



                <div className="timeline-tech">

                    {item.technologies.map((tech) => (

                        <span key={tech}>

                            {tech}

                        </span>

                    ))}

                </div>


            </div>


        </motion.article>

    );

};


export default TimelineItem;