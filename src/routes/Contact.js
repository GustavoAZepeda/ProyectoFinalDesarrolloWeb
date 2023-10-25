import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { HeroImg2 } from "../components/heroImages/HeroImg2";
 import { ContactForm } from "../components/contact/ContactForm";


export const Contact = () => {
  
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contacto" text="Puedes contactarme por correo." />
      <ContactForm />
      <Footer />
    </div>
  );
};

