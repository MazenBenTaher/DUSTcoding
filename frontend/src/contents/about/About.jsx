import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo_white.png";
import test from "../../assets/images/pic.jpg";
const About = () => {
  return (
    <div className="  bg-dustDark h-1/2 p-9 text-white">
      <div className="items-center text-center ">
        <h5 className=" text-m font-extrabold">What is DUSTcoding</h5>
      </div>
      <div className=" items-center justify-center xl:flex ">
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
        <div className="flex h-auto items-center justify-center lg:items-center xl:mx-auto xl:flex-col ">
          <img src={logo} className="w-96" alt="logo" />
        </div>
      </div>
      <div className="items-center text-center ">
        <h5 className=" text-m font-extrabold">Our Obejctif</h5>
      </div>
      <br />
      <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-8 space-x-2 md:grid-cols-1 lg:grid-cols-3">
        <article className="group bg-dustM relative h-64 w-80 overflow-hidden rounded-lg bg-cover bg-center shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
          <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75"></div>
          <div className="relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
            <h3 className="text-center">
              <span className="absolute inset-0"></span>
              Offrez des solutions de qualité qui répondent aux besoins et aux
              attentes de nos clients afin d'obtenir une satisfaction globale
              des clients.
            </h3>
          </div>
        </article>
        <article className="group bg-dustM relative h-64 w-80 overflow-hidden rounded-lg bg-cover bg-center shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
          <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75"></div>
          <div className="relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
            <h3 className="text-center">
              <span className="absolute inset-0"></span>
              Improve business performance as a strategic partner..{" "}
            </h3>
          </div>
        </article>
        <article className="group bg-dustM relative h-64 w-80 overflow-hidden rounded-lg bg-cover bg-center shadow-lg  transition duration-300 ease-in-out hover:shadow-2xl">
          <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75"></div>
          <div className="relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
            <h3 className="text-center">
              <span className="absolute inset-0"></span>
              Le développement des produits et des solutions innovants,
              connectés et intelligents, ciblant les besoins de différents
              secteurs
            </h3>
          </div>
        </article>
      </div>
      <br />
      <div className="items-center text-center ">
        <h5 className=" text-m font-extrabold">Our Team</h5>
        <div className="grid grid-cols-3 justify-center gap-3 ">
          <div className="mb-8 text-center md:mb-0 md:w-1/2">
            <img
              className="mx-auto -mb-24 h-40 w-40 rounded-full"
              src={test}
              alt="Avatar Jacky"
            />
            <div className="px-8 pt-32 pb-10 text-gray-400">
              <h3 className="font-title mb-3 text-xl text-gray-800">
                Jacky Pout
              </h3>
              <p className="font-body">FullStack Engineer</p>
              <p className="font-body text-s mb-4">
                He love caramel and he hate PHP
              </p>
              <div className="border-text-dustLight text-dustM mx-auto flex w-40 items-center justify-between border-t pt-8">
                <a href="https://www.facebook.com/DTcoding">
                  <FaFacebookF />
                </a>
                <a href="https://tn.linkedin.com/company/dtcoding?trk=public_profile_topcard-current-company">
                  <FaLinkedin />
                </a>
                <a href="https://github.com">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/DTcoding">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8 text-center md:mb-0 md:w-1/2">
            <img
              className="mx-auto -mb-24 h-40 w-40 rounded-full"
              src={test}
              alt="Avatar Jacky"
            />
            <div className="px-8 pt-32 pb-10 text-gray-400">
              <h3 className="font-title mb-3 text-xl text-gray-800">
                Jacky Pout
              </h3>
              <p className="font-body">FullStack Engineer</p>
              <p className="font-body text-s mb-4">
                He love caramel and he hate PHP
              </p>
              <div className="border-text-dustLight text-dustM mx-auto flex w-40 items-center justify-between border-t pt-8">
                <a href="https://www.facebook.com/DTcoding">
                  <FaFacebookF />
                </a>
                <a href="https://tn.linkedin.com/company/dtcoding?trk=public_profile_topcard-current-company">
                  <FaLinkedin />
                </a>
                <a href="https://github.com">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/DTcoding">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8 text-center md:mb-0 md:w-1/2">
            <img
              className="mx-auto -mb-24 h-40 w-40 rounded-full"
              src={test}
              alt="Avatar Jacky"
            />
            <div className="px-8 pt-32 pb-10 text-gray-400">
              <h3 className="font-title mb-3 text-xl text-gray-800">
                Jacky Pout
              </h3>
              <p className="font-body">FullStack Engineer</p>
              <p className="font-body text-s mb-4">
                He love caramel and he hate PHP
              </p>
              <div className="border-text-dustLight text-dustM mx-auto flex w-40 items-center justify-between border-t pt-8">
                <a href="https://www.facebook.com/DTcoding">
                  <FaFacebookF />
                </a>
                <a href="https://tn.linkedin.com/company/dtcoding?trk=public_profile_topcard-current-company">
                  <FaLinkedin />
                </a>
                <a href="https://github.com">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/DTcoding">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8 text-center md:mb-0 md:w-1/2">
            <img
              className="mx-auto -mb-24 h-40 w-40 rounded-full"
              src={test}
              alt="Avatar Jacky"
            />
            <div className="px-8 pt-32 pb-10 text-gray-400">
              <h3 className="font-title mb-3 text-xl text-gray-800">
                Jacky Pout
              </h3>
              <p className="font-body">FullStack Engineer</p>
              <p className="font-body text-s mb-4">
                He love caramel and he hate PHP
              </p>
              <div className="border-text-dustLight text-dustM mx-auto flex w-40 items-center justify-between border-t pt-8">
                <a href="https://www.facebook.com/DTcoding">
                  <FaFacebookF />
                </a>
                <a href="https://tn.linkedin.com/company/dtcoding?trk=public_profile_topcard-current-company">
                  <FaLinkedin />
                </a>
                <a href="https://github.com">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/DTcoding">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8 text-center md:mb-0 md:w-1/2">
            <img
              className="mx-auto -mb-24 h-40 w-40 rounded-full"
              src={test}
              alt="Avatar Jacky"
            />
            <div className="px-8 pt-32 pb-10 text-gray-400">
              <h3 className="font-title mb-3 text-xl text-gray-800">
                Jacky Pout
              </h3>
              <p className="font-body">FullStack Engineer</p>
              <p className="font-body text-s mb-4">
                He love caramel and he hate PHP
              </p>
              <div className="border-text-dustLight text-dustM mx-auto flex w-40 items-center justify-between border-t pt-8">
                <a href="https://www.facebook.com/DTcoding">
                  <FaFacebookF />
                </a>
                <a href="https://tn.linkedin.com/company/dtcoding?trk=public_profile_topcard-current-company">
                  <FaLinkedin />
                </a>
                <a href="https://github.com">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/DTcoding">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
