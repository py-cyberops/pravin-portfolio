import { navLinks } from "../../data/navigation";
import "./Navbar.css";


const Navbar = () => {

    return (
        <nav className="navbar">

            <div className="navbar-logo">
                Pravin Gyawali
            </div>


            <ul className="navbar-links">

                {
                    navLinks.map((link)=>(
                        <li key={link.name}>
                            <a href={link.path}>
                                {link.name}
                            </a>
                        </li>
                    ))
                }

            </ul>

        </nav>
    );
};


export default Navbar;