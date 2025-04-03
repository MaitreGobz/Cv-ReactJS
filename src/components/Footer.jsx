import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Github from "../img/icons8-github-48.png";
import Insta from "../img/icons8-instagram-48.png";
import Linkedin from "../img/icons8-linkedin-48.png";



const Footer = () => {

    useEffect(() => {
        const scrollTopBtn = document.getElementById("scrollTopBtn");

        const handleScroll = () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = "block";
                scrollTopBtn.style.opacity = "1";
            } else {
                scrollTopBtn.style.opacity = "0";
                setTimeout(() => {
                    if (window.scrollY < 300) scrollTopBtn.style.display = "none";
                }, 300);
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        window.addEventListener("scroll", handleScroll);
        scrollTopBtn.addEventListener("click", scrollToTop);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            scrollTopBtn.removeEventListener("click", scrollToTop);
        };
    }, []);

    return(
        <footer className="footer py-4">
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-justify">
                    <div className="col">
                        <div className="p-3">
                            <h4 className="nayet-lucas-infos">Nayet Lucas</h4>
                            <address>
                                252, Chemin du Coutelet Bas <br />
                                82150 Montaigu de Quercy <br />
                                Téléphone : <a href="tel:+33667801784">06 67 80 17 84</a>
                            </address>
                            <div>
                                <a href="https://github.com/MaitreGobz" target="blank" rel="nofollow">
                                    <img src={Github} alt="logo github" />
                                </a>
                                <a href="https://www.instagram.com/maitregobz/" target="blank" rel="nofollow">
                                    <img src={Insta} alt="logo instagram" />
                                </a>
                                <a href="https://www.linkedin.com/in/lucas-nayet-091a36359/" target="blank" rel="nofollow">
                                    <img src={Linkedin} alt="logo github" />
                                </a>
                            </div>
                        </div>
                    </div>               
                    <div className="col">
                        <div className="p-3">
                            <h4 className="list-group">Liens utiles</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="list-group-item" to="/"><span>> </span>Accueil</Link>
                                </li>
                                <li>
                                    <Link className="list-group-item" to="/about"><span>> </span>A propos</Link>
                                </li>
                                <li>
                                    <Link className="list-group-item" to="/services"><span>> </span>Services</Link>
                                </li>
                                <li>
                                    <Link className="list-group-item" to="/contact"><span>> </span>Me contacter</Link>
                                </li>
                                <li>
                                    <Link className="list-group-item " to="/mentions"><span>> </span>Mentions légales</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h5>Mes dernières réalisations</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="list-group-item " to="/realisations"><span>> </span>Fresh food</Link>
                                </li>
                                <li>
                                    <Link className="list-group-item " to="/realisations"><span>> </span>Restaurant Akira</Link>
                                </li>
                                <li>
                                    <Link className="list-group-item " to="/realisations"><span>> </span>Espace bien-être</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h5>Mes dernièrs articles</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="list-group-item " to="/blog"><span>> </span>Coder son site en HTML/CSS</Link>
                                </li>
                                <li>
                                    <Link className="list-group-item " to="/blog"><span>> </span>Vendre ses produits sur le web</Link>
                                </li>
                                <li>
                                    <Link className="list-group-item " to="/blog"><span>> </span>Se positionner sur Google</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="col bg-dark text-light text-center p-2">
                <span id="copyright">© Designed by Nayet Lucas</span>
            </div>
            {/* Bouton de retour en haut */}
            <button 
                id="scrollTopBtn" 
                className="btn btn-dark rounded py-2 px-2 position-fixed bottom-0 end-10 m-4">
                Retourner en haut
            </button>
        </footer>
    )
};

export default Footer;