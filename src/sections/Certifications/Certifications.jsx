import { motion } from "motion/react";

import {
    containerVariants,
    itemVariants
} from "../../animations/variants";

import certifications from "../../data/certifications";

import CertificationCard from "../../components/CertificationCard/CertificationCard";

import "./Certifications.css";


const Certifications = () => {

    return (

        <section 
            className="certifications"
            id="certifications"
        >

            <motion.div

                className="certifications-container"

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

                    CERTIFICATIONS

                </motion.p>




                <motion.h2

                    variants={itemVariants}

                >

                    Verified learning milestones.

                </motion.h2>




                <motion.p

                    className="certifications-description"

                    variants={itemVariants}

                >

                    Professional certifications covering software
                    development, networking, cybersecurity, cloud
                    fundamentals, and engineering practices.

                </motion.p>




                <div className="certifications-grid">


                    {
                        certifications.map((certificate)=>(

                            <CertificationCard

                                key={certificate.id}

                                certificate={certificate}

                            />

                        ))
                    }


                </div>



            </motion.div>


        </section>

    );

};


export default Certifications;