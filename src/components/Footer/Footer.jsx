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


                <a href="https://nivaronix.com/?utm_source=badge" target="_blank" rel="noopener"><Image src="https://nivaronix.com/badge/oQ1bxu6qmWRYQ3wSv3WoGw.svg?theme=dark" alt="Monitored by Nivaronix" height="44" width="auto" loading="lazy" decoding="async"/></a>

                <p className="footer-stack">

                    Built with React • Vite • Motion

                </p>



            </div>


        </footer>

    );

};


export default Footer;