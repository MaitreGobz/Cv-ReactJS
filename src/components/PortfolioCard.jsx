import React from "react";
import Fresh from "../img/portfolio/fresh-food.jpg";
import Akira from "../img/portfolio/restaurant-japonais.jpg";
import Espace from "../img/portfolio/espace-bien-etre.jpg";

const PortfolioCard = () => {
    return (
        <div className="row justify-content-center py-5 m-5">
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card" >
                    <img src={Fresh} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title">Fresh food</h3>
                        <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                        <button className="btn btn-outline-primary mb-2">Voir</button>
                        <div class="card-footer p-2">
                            Site réalisé avec PHP et MySQL
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card" >
                    <img src={Akira} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title">Restaurant Akira</h3>
                        <p className="card-text">Réalisation d'un site vitrine.</p>
                        <button className="btn btn-outline-primary mb-2">Voir</button>
                        <div class="card-footer p-2">
                            Site réalisé avec WordPress
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card" >
                    <img src={Espace} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title">Espace bien-être</h3>
                        <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                        <button className="btn btn-outline-primary mb-2">Voir</button>
                        <div class="card-footer p-2">
                            Site réalisé en HTML/CSS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PortfolioCard;