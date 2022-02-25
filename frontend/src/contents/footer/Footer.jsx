import React from "react";
import dust from "../../assets/images/logo_white.png";
import { FaFacebookF, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="from-dustDark to-dustLight flex justify-between bg-gradient-to-r p-5 text-white">
      <div className="grid w-1/3 flex-col">
        <div className="flex items-center justify-center">
          <img src={dust} alt="fireSpot" />
        </div>
        <div className="items-center px-4 py-7 sm:px-12 md:flex md:justify-between">
          <p>
            A Tunisian SSII that creates high quality professional websites
            using the most advanced web solutions with the highest standards.
          </p>
        </div>
      </div>

      <div className="m-auto flex  max-w-6xl justify-center text-gray-800">
        <div>
          <div className="text-m font-medium uppercase text-gray-500">Home</div>
          <a className="my-3 block" href="/About">
            About <span className="p-1 text-xs text-teal-600"></span>
          </a>
          <a className="my-3 block" href="/Article">
            Artical <span className="p-1 text-xs text-teal-600"></span>
          </a>
          <a className="my-3 block" href="/Contact">
            Contact <span className="p-1 text-xs text-teal-600"></span>
          </a>
          <a className="my-3 block" href="/Service">
            Services <span className="p-1 text-xs text-teal-600"></span>
          </a>
        </div>
      </div>
      <div className="m-auto grid max-w-6xl flex-wrap justify-center text-gray-800">
        <div className="w-48 p-5 ">
          <div className="text-m font-medium uppercase text-gray-500">
            Social Media
          </div>
          <div className="mx-auto flex w-40 items-center justify-between  pt-8 ">
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
        <div>
          <form className="m-4 grid">
            <input
              className=" border-dustDark rounded-full border bg-white p-4 text-black"
              placeholder="your@mail.com"
            />
            <br />
            <button className="bg-dustDark hover:bg-dustM shadow-dustLight hover:shadow-dustDark rounded-full font-bold text-white shadow-md hover:text-black">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
