import "./ProyectsCardStyles.css";

import React from "react";
import { Link } from "react-router-dom";

export const PriceCardList = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3> Proyecto 1</h3>
          <span className="bar"></span>
          <p className=""> Web Page Barberia </p>
          <p className=""> - Html, css - </p>
          <p className=""> - Featured - </p>
          <p className=""> - Responsive Design - </p>

          <Link to="https://github.com/23r0-coder/ParcialPrograII" className="btn">
            Visitar
          </Link>
        </div>

        <div className="card">
          <h3> Proyecto 2</h3>
          <span className="bar"></span>
          <p className=""> Remote Control Car </p>
          <p className=""> - Arduino - </p>
          <p className=""> - Featured - </p>
          <p className=""> - Responsive Design - </p>

          <Link to="https://github.com/GustavoAZepeda/ArduinoCarBluetooth" className="btn">
            Visitar
          </Link>
        </div>

        <div className="card">
          <h3> Proyecto 3</h3>
          <span className="bar"></span>
          <p className=""> Task Manager </p>
          <p className=""> - C# - </p>
          <p className=""> - Featured - </p>
          <p className=""> - Responsive Design - </p>

          <Link to="https://github.com/23r0-coder/TaskManager" className="btn">
            Visitar
          </Link>
        </div>
      </div>
    </div>
  );
};
