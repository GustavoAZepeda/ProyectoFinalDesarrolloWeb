import "./HeroImgStyles.css";
import { React } from "react";

import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt='HeroImage' />
      </div>

      <div className="content">
        <p>Hola, soy un programador.</p>
        <h1>¿Quieres conocer más?</h1>
        <div>
          <Link to="/project" className="btn">
            Proyectos
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

