import React from "react";
import FormContact from "../components/FormContact";
import Tel from "../img/icons8-téléphone-24.png";
import Map from "../img/icons8-marqueur-24.png";


const Contact = () => {
    return (
        <main>
            <section className="contact-section py-5" id="contact">
                <div className="container row bg-white shadow rounded mx-auto p-4">
                    <h2 className="text-center text-uppercase mb-3 mt-5">Me contacter</h2>
                    <p className="text-center pb-5">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <span className="border-bottom border-primary border-5 opacity-75 mx-auto mb-4 w-25"></span>
                    <div className="row bg-white mt-4">
                        <div className="col-md-6">
                            <h4 className="mb-3 border-bottom border-primary border-2 pb-1">Formulaire de contact</h4>
                            <FormContact />
                        </div>
                        <div className="col-md-6 ps-md-4 mt-4 mt-md-0">
                            <h4 className="mb-3 border-bottom border-primary border-2 pb-1">Mes coordonnées</h4>
                            <p><img src={Map} alt="Logo map" /> 252, Chemin du Coutelet Bas 82150 Montaigu de Quercy</p>
                            <p><img src={Tel} alt="Logo téléphone" /> 06 67 80 17 84</p>
                            <div>
                            <iframe 
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.8865324818125!2d1.042497676557979!3d44.3122831095543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab9b5b99917b93%3A0x4f5184dfdfe111f3!2s252%20Chem.%20de%20Coutelet%20Bas%2C%2082150%20Montaigu-de-Quercy!5e0!3m2!1sfr!2sfr!4v1744105954891!5m2!1sfr!2sfr" 
                                width="100%" 
                                height="250" 
                                style={{border: 0}} 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">                                  
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