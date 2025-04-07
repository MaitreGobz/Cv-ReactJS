import React from "react";
import FormContact from "../components/FormContact";
import Tel from "../img/icons8-téléphone-24.png";
import Map from "../img/icons8-marqueur-24.png";


const Contact = () => {
    return (
        <main>
            <section className="contact-section py-5" id="contact">
                <div className="container justify-content-center row bg-white shadow rounded mx-auto p-4">
                    <h2 className="text-center text-uppercase mb-3 mt-5">Me contacter</h2>
                    <p className="text-center mb-1 pb-5 ">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <hr className="border border-primary border-3 opacity-75 mb-4" style={{width:"30%"}} />
                    <div className="row bg-white mt-4">
                        <div className="col-md-6">
                            <h4 className="mb-3 border-bottom border-primary border-2 pb-1">Formulaire de contact</h4>
                            <FormContact />
                        </div>
                        <div className="col-md-6 ps-md-4 mt-4 mt-md-0">
                            <h4 className="mb-3 border-bottom border-primary border-2 pb-1">Mes coordonnées</h4>
                            <p><img src={Map} alt="Logo map" /> 40 Rue Laure Diebold, 69009 Lyon, France</p>
                            <p><img src={Tel} alt="Logo téléphone" /> 06 20 30 40 50</p>
                            <div>
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Contact;