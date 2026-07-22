import "./Footer.css";


const Footer = () => {


    return (

        <footer className="footer">


            <div className="footer-container">


                <p className="footer-brand">

                    © {new Date().getFullYear()}{" "}

                    <a

                        href="https://github.com/py-cyberops"

                        target="_blank"

                        rel="noopener noreferrer"

                    >

                        Pravin Gyawali

                    </a>

                </p>




                <p className="footer-role">

                    Security-Focused Full Stack Developer

                </p>




                <p className="footer-stack">

                    Built with React • Vite • Motion

                </p>



            </div>


        </footer>

    );

};


export default Footer;