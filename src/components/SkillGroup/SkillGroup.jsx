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


            <ul>

                {group.skills.map((skill)=>(

                    <li key={skill}>

                        {skill}

                    </li>

                ))}

            </ul>


        </motion.article>

    );

};


export default SkillGroup;