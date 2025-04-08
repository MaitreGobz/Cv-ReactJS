import React from "react";
import LegalNoticeCard from "../components/LegalNoticeCard";



const LegalNotice = () => {
    return (      
        <main rel="noindex">
            <div className="container-fluid py-5">
                <h1 className="mt-3 text-uppercase text-center display-4 fw-bold">Mentions Légales</h1>
                <hr className="border border-primary border-3 opacity-75 mx-auto mb-4" width="30%" />
                <LegalNoticeCard />
            </div>
        </main>
    )
};

export default LegalNotice;