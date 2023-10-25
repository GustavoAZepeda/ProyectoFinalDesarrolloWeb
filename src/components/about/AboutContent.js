import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

import React1 from "../../assets/react1.jpg"
import React2 from "../../assets/react2.webp"

export const AboutContent = () => {


    return(
        <div className="about">
            <div className="left">
                <h1>¿Quién soy?</h1>
                <p>iHola! Soy Gustavo. Entre las tecnologías que domino estan React, Ruby y JavaScript. Tambien disfruto mucho de los misterios y de aprender nuevas cosas.</p>
                <Link to="/contact">
                    <button className="btn">Contactar</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true"/>
                    </div>

                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true"/>
                    </div>
                </div>
            </div>
        </div>
    )
}