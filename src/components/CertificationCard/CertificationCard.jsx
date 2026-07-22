import { motion } from "motion/react";

import {
    itemVariants
} from "../../animations/variants";

import "./CertificationCard.css";


const CertificationCard = ({ certificate }) => {


    return (

        <motion.article

            className="certification-card"

            variants={itemVariants}

        >


            <div className="certificate-number">

                {certificate.id}

            </div>




            <div className="certificate-content">


                <span className="certificate-category">

                    {certificate.category}

                </span>




                <h3>

                    {certificate.title}

                </h3>




                <p className="certificate-issuer">

                    {certificate.issuer}

                </p>




                <div className="certificate-meta">


                    <span className="certificate-year">

                        {certificate.year}

                    </span>



                    <span className="certificate-type">

                        PDF Credential

                    </span>


                </div>




                <a

                    href={certificate.pdf}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="certificate-link"

                >

                    View Certificate ↗

                </a>


            </div>


        </motion.article>

    );

};


export default CertificationCard;