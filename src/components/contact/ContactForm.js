
import "./FormStyles.css";
import React from "react";


export const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <label>Tu nombre</label>
        <input type="text"/>

        <label>Tu correo</label>
        <input type="email"/>

        <label>Asunto</label>
        <input type="text"/>

        <label>Mensaje</label>
        <textarea className="non-resizable-textarea" rows="6" placeholder="Escribe tu mensaje acá" />

        <button className="btn">Enviar </button>
      </form>
    </div>
  );
};
