import { useState } from "react";

import { navLinks } from "../../data/navigation";

import "./Navbar.css";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    return (

        <nav className="navbar">


            <div className="navbar-logo">
                Pravin Gyawali
            </div>



            <button

                className="menu-toggle"

                onClick={() => setMenuOpen(!menuOpen)}

            >

                ☰

            </button>



            <ul

                className={
                    menuOpen
                    ? "navbar-links active"
                    : "navbar-links"
                }

            >

                {
                    navLinks.map((link)=>(

                        <li key={link.name}>

                            <a

                                href={link.path}

                                onClick={() => setMenuOpen(false)}

                            >

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