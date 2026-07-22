import { useState, useEffect } from "react";

import { navLinks } from "../../data/navigation";

import "./Navbar.css";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const [activeSection, setActiveSection] = useState("home");



    useEffect(() => {

        const sections = document.querySelectorAll("section[id]");


        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setActiveSection(entry.target.id);

                    }

                });

            },

            {
                threshold:0.3,
            }

        );


        sections.forEach((section) => {

            observer.observe(section);

        });


        return () => {

            sections.forEach((section) => {

                observer.unobserve(section);

            });

        };


    }, []);



    return (

        <nav className="navbar">


            <div className="navbar-logo">

                Pravin Gyawali

            </div>



            <button

                className="menu-toggle"

                aria-label="Toggle navigation menu"

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

                                className={
                                    activeSection === link.path.substring(1)
                                    ? "active"
                                    : ""
                                }

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