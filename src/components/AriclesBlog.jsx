import React from "react";
import Coder from "../img/blog/coder.jpg";
import Croissance from "../img/blog/croissance.jpg";
import Google from "../img/blog/google.jpg";
import Screen from "../img/blog/screens.jpg";
import SEO2 from "../img/blog/seo.jpg";
import Technos from "../img/blog/technos.png";

const Article = () => {
    return (
        <div className="row py-5 m-5">
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card">
                    <img src={Coder} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Coder son site en HTML/CSS</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary mb-2">Lire la suite</button>
                        <div class="card-footer p-2">
                            Publié le 22 août 2022
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card" >
                    <img src={Croissance} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Vendre ses produits sur le web</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary mb-2">Lire la suite</button>
                        <div class="card-footer p-2">
                            Publié le 2O août 2022
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card" >
                    <img src={Google} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Se positionner sur Google</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary mb-2">Lire la suite</button>
                        <div class="card-footer p-2">
                            Publié le 01 août 2022
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card" >
                    <img src={Screen} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Coder en responsive design</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary mb-2">Lire la suite</button>
                        <div class="card-footer p-2">
                            Publié le 31 juillet 2022
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card" >
                    <img src={SEO2} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Techniques de référencement</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary mb-2">Lire la suite</button>
                        <div class="card-footer p-2">
                        Publié le 30 juillet 2022
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-2">
                <div className="card" >
                    <img src={Technos} className="card-img-top" alt="fresh food"/>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Apprendre à coder</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary mb-2">Lire la suite</button>
                        <div class="card-footer p-2">
                        Publié le 12 juillet 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Article;