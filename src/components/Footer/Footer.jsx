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

                <div className="footer-badge">
                    <a
                        href="https://nivaronix.com/?utm_source=badge"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://nivaronix.com/badge/oQ1bxu6qmWRYQ3wSv3WoGw.svg?theme=dark"
                            alt="Monitored by Nivaronix"
                            height={44}
                            loading="lazy"
                            decoding="async"
                        />
                    </a>
                </div>

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