import React from "react";
import Ecran from "../img/icon8-ecran.png";
import Code from "../img/icons8-code.png";
import SEO from "../img/icons8-recherche.png";

const ServiceCard = () => {
    return(
        <div className="row justify-content-center py-5 my-5">
            <div className="col-md">
                <div className="card m-2" style={{minHeight: "20rem"}}>
                    <img src={Ecran} className="rounded mx-auto d-block mt-4" alt="logo écran" width={'50'}/>
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">UX Design</h5>
                        <p className="card-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                    </div>
                </div>
            </div>
            <div className="col-md">
                <div className="card m-2" style={{minHeight: "20rem"}}>
                    <img src={Code} className="rounded mx-auto d-block mt-4" alt="logo écran" width={'50'}/>
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">Développement web</h5>
                        <p className="card-text">Le <strong>développement de site web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                    </div>
                </div>
            </div>
            <div className="col-md">
                <div className="card m-2" style={{minHeight: "20rem"}}>
                    <img src={SEO} className="rounded mx-auto d-block mt-4" alt="logo écran" width={'50'}/>
                    <div className="card-body">
                        <h5 className="card-title text-uppercase">Référencement</h5>
                        <p className="card-text">Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServiceCard;