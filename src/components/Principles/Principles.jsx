import { motion } from "motion/react";

import {
    containerVariants,
    itemVariants
} from "../../animations/variants";

import principles from "../../data/principles";

import "./Principles.css";


const Principles = () => {

    return (

        <motion.div

            className="principles"

            variants={containerVariants}

            initial="hidden"

            whileInView="visible"

            viewport={{
                once:true,
                amount:0.3
            }}

        >


            <motion.p

                className="principles-label"

                variants={itemVariants}

            >

                SYSTEM PRINCIPLES

            </motion.p>



            <div className="principles-grid">


                {principles.map((item)=>(


                    <motion.article

                        key={item.id}

                        className="principle-card"

                        variants={itemVariants}

                    >

                        <span className="principle-number">

                            {item.id}

                        </span>


                        <h3>

                            {item.title}

                        </h3>


                        <p>

                            {item.description}

                        </p>


                    </motion.article>


                ))}


            </div>


        </motion.div>

    );

};


export default Principles;