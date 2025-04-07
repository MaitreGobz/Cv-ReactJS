import React from "react";
import Banner from "../img/banner.jpg";
import Article from "../components/AriclesBlog";

const Blog = () => {
    return (
        <main>
            <img src={Banner} alt="bannière" className="img-fluid w-100 pb-2" />
            <div className="container-fluid">
                <h1 className="mt-3 text-uppercase text-center display-4 fw-bold">Blog</h1>
                <p className="text-center">Retrouvez ici quelques article sur le développement web.</p>
                <hr className="border border-primary border-3 opacity-75 mx-auto mb-4" width="30%" />
                <Article />
            </div>
        </main>
    )
};

export default Blog;