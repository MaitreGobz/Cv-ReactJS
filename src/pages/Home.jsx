import React from "react";
import JhonDoe from "../img/john-doe-about.jpg";


const Home = () => {

    /* défilement jusqu'a "A propos" */
    const handleScrollToSection = () => {
        const section = document.getElementById('about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <main>
            <section className="p-3 bg-dark bg-oppacity-75" id="presentation">       
                <div className="text-center">
                    <h1 className="fw-bold display-3 p-2">Bonjour, je suis Lucas Nayet</h1>
                    <h2 className="fw-bold display-5 p-2">Développeur web full stack</h2>
                    <button type="button" className="btn btn-primary" onClick={handleScrollToSection}>En savoir plus</button>
                </div>
            </section>
            <section className="container p-5" id="about">
                <div className="shadow p-3 py-4 mb-5 rounded bg-body-light row">
                    <div className="col-md-6">
                        <h2 className="text-center text-uppercase pb-5 border-bottom border-primary border-5 mx-auto mb-4">à propos</h2>                     
                        <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
                        Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                        <p>Basé à Lyon, je suis à la recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                        <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={JhonDoe} alt="Portrait John Doe" className="img-fluid w-100" />
                        <h3 className="mt-3">Mes compétences</h3>
                        <h5 className="mt-3">HTML 5 90%</h5>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" aria-label="HTML" style={{width: "90%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5 className="mt-3">CSS 3 80%</h5>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" aria-label="CSS" style={{width: "80%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5 className="mt-3">Javascript 70%</h5>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" aria-label="Javascript" style={{width: "70%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5 className="mt-3">PHP 60%</h5>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" aria-label="PHP" style={{width: "60%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5 className="mt-3">React 50%</h5>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="React" style={{width: "50%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Home;