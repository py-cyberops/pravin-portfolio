import { motion } from "motion/react";

import {
    containerVariants,
    terminalLineVariants,
    floatAnimation
} from "../../animations/variants";

import useTypingEffect from "../../hooks/useTypingEffect";

import "./HeroTerminal.css";


const HeroTerminal = () => {


    const command = useTypingEffect(
        "$ whoami",
        70
    );


    return (

        <motion.div {...floatAnimation}>

            <motion.div

                className="terminal"

                variants={containerVariants}

                initial="hidden"

                animate="visible"

            >


                <div className="terminal-header">

                    <div className="terminal-controls">

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>


                    <p className="terminal-title">
                        PRAVIN.OS
                    </p>

                </div>



                <div className="terminal-body">


                    <motion.p variants={terminalLineVariants}>

                        {command}

                    </motion.p>



                    <motion.h3 variants={terminalLineVariants}>

                        Pravin Gyawali

                    </motion.h3>



                    <motion.p variants={terminalLineVariants}>

                        Full Stack Engineer

                    </motion.p>



                    <motion.p variants={terminalLineVariants}>

                        Security Focus:

                        <span className="active">
                            Active
                        </span>

                    </motion.p>



                    <br />



                    <motion.p variants={terminalLineVariants}>

                        <span className="prompt">
                            $
                        </span>

                        stack

                    </motion.p>



                    <motion.ul variants={terminalLineVariants}>

                        <li>React ✓</li>
                        <li>Node.js ✓</li>
                        <li>Python ✓</li>
                        <li>Cloud ✓</li>

                    </motion.ul>



                    <motion.div

                        className="status"

                        variants={terminalLineVariants}

                    >

                        <span className="status-dot">
                            ●
                        </span>

                        SYSTEM ONLINE

                    </motion.div>


                </div>


            </motion.div>


        </motion.div>

    );

};


export default HeroTerminal;