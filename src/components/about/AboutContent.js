import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/foto.jpg"

export const AboutContent = () => {


    return(
        <div className="about">
            <div className="left">
                <h1>¿Quién soy?</h1>
                <p>iHola! Soy Gustavo. Entre las tecnologías que domino estan React, Python y JavaScript. Desarrollar páginas web es un de mis pasatiempos, pero mi principal afición es la ciencia de datos.</p>
                <Link to="/contact">
                    <button className="btn">Contactar</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img1} className="img" alt="true"/>
                    </div>
                </div>
            </div>
        </div>
    )
}