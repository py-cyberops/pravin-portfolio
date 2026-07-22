import { motion } from "motion/react";

import {
    itemVariants
} from "../../animations/variants";

import "./SkillGroup.css";


const SkillGroup = ({group}) => {


    return (

        <motion.article

            className="skill-group"

            variants={itemVariants}

        >


            <span className="skill-number">

                {group.id}

            </span>




            <h3>

                {group.title}

            </h3>




            <div className="skill-list">


                {
                    group.skills.map((skill)=>(

                        <span

                            key={skill}

                            className="skill-item"

                        >

                            {skill}

                        </span>

                    ))
                }


            </div>



        </motion.article>

    );

};


export default SkillGroup;