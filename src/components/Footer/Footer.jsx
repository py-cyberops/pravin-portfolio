import "./Footer.css";


const Footer = () => {

    return (

        <footer className="footer">

            <p>
                © {new Date().getFullYear()}<a href="https://github.com/py-cyberops" target="_blank" rel="noopener noreferrer"> Pravin Gyawali. </a>

                All rights reserved.
            </p>

        </footer>

    )

}


export default Footer;