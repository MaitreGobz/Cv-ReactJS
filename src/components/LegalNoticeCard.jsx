import React from "react";
import Tel from "../img/icons8-téléphone-24.png";
import Map from "../img/icons8-marqueur-24.png";
import Courriel from "../img/icons8-courrier-24.png";
import Net from "../img/icons8-internet-24.png";
import { Link } from "react-router-dom";


const LegalNoticeCard = () => {
    return (
        <div className="accordion m-5 py-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Editeur du site
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <h5>Nayet Lucas</h5>
                            <p><img src={Map} alt="Logo map" />252, Chemin du Coutelet Bas<br></br>82150 Montaigu de Quercy</p>
                            <p><img src={Tel} alt="Logo téléphone" /> <a href="tel:+33667801784">06 67 80 17 84</a></p>
                            <p><img src={Courriel} alt="Logo courrier" /> <a href="mailto:lucasnayet@gmail.com">lucasnayet@gmail.com</a></p>
                            <Link to="/github" target="blank">Profil Github intégré</Link>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Hébergeur
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h2>Vercel</h2>
                        <p><img src={Net} alt="Logo du net" /> <a href="https://vercel.com/home" rel="noreferrer">https://vercel.com/home</a></p>               
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Crédits
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h2>Crédits</h2>
                        <p>Site développé par Nayet Lucas, étudiant du CEF.</p>
                        <p>Les images libres de droits sont issue de <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a>.</p>
                        <p>Les icônes libres de droit sont issue de <a href="https://icones8.fr/icons" target="_blank" rel="noreferrer">Icon8</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LegalNoticeCard;