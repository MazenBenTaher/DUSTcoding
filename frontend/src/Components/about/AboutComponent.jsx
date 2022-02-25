import React from "react";
import logo from "../../assets/images/logo_white.png";

const AboutComponent = () => {
  return (
    <div className="  h-1/2 p-9 text-white ">
      <div className="items-center text-center ">
        <h1 className=" text-5xl font-extrabold">ABOUT US</h1>
      </div>
      <div className=" items-center justify-center xl:flex">
        <div className="flex h-auto items-center justify-center lg:items-center xl:mx-auto xl:flex-col">
          <img src={logo} className="w-96" alt="logo" />
        </div>
        <div className="flex items-center p-5 text-justify xl:w-1/2">
          <p>
            Une SSII tunisienne qui crée des sites web professionnels de haute
            qualité en utilisant les solutions web les plus avancées avec les
            standards les plus élevés. Nous avons de designers talentueux, de
            développeurs et de créateurs de toutes sortes, qui livrent de
            produits numériques de très haute qualité. DUSTcoding est une
            société de services en ingénierie informatique qui se spécialise
            dans les solutions logicielles à la pointe de la technologie,
            conception de sites Web. Nous sommes une entreprise dédiée à la
            satisfaction de nos partenaires d’affaires et ainsi commis à
            l’optimisation des ressources dans le domaine technologique, la
            production d’une valeur ajoutée aux produits et services de nos
            clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
