import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { HeroImg2 } from "../components/heroImages/HeroImg2";
import { PriceCardList } from "../components/proyectsCards/ProyectsCardList";

export const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Proyectos" text="Algunos de mis proyectos." />
      <PriceCardList />
      <Footer />
    </div>
  );
};

