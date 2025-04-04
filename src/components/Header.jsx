import React from "react"; 
import { Link } from "react-router-dom";
import Logo from "../img/apple-touch-icon.png";

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand text-light" href="/">
                        <img src={Logo} alt="Logo" id="logo" />
                        <span>Nayet Lucas</span>
                    </a>
                    <button className="navbar-toggler collapsed bg-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Accueil</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/services">Services</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/realisations">Réalisations</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">Me contacter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;