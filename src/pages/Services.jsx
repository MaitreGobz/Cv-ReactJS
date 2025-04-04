import React from "react";
import Banner from "../img/banner.jpg";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
    return(
        <main>
            <img src={Banner} alt="bannière" className="img-fluid w-100 pb-2" />
            <div className="text-center container-fluid pb-4 py-5">
                <h1 className="mt-3">MON OFFRE DE SERVICES</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                <hr className="border border-primary border-3 opacity-75 mx-auto mb-4" width="30%" />
                <ServiceCard />
            </div>
        </main>
    )
};

export default Services;