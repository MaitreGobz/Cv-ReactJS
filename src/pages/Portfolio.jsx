import React from "react";
import Banner from "../img/banner.jpg";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
    return (
        <main>
            <img src={Banner} alt="bannière" className="img-fluid w-100 pb-2" />
            <div className="text-center container-fluid">
                <h1 className="mt-3 text-uppercase">Portfolio</h1>
                <p>Voici quelque unes de mes réalisations.</p>
                <hr className="border border-primary border-3 opacity-75 mx-auto mb-4" width="30%" />
                <PortfolioCard />
            </div>
        </main>
    )
};

export default Portfolio;