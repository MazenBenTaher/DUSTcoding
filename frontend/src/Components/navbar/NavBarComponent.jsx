import React, { useState } from "react";
import logo from "../../assets/images/dust.png";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="py-6">
      <div className="fixed-top inset-x-0 top-0 flex flex-wrap bg-white shadow-lg ">
        <section className="relative mx-auto">
          <nav className="text-dustDark flex w-screen justify-between">
            <div className="flex w-full items-center px-5 py-2 xl:px-12">
              <img className="h-9" src={logo} alt="logo" />
              <ul className="font-heading mx-auto hidden space-x-12 px-4 font-semibold md:flex">
                <li>
                  <Link
                    to="/home"
                    className="hover:border-dustLight hover:text-dustDark focus:border-dustLight focus:ring-dustLight active:border-dustLight cursor-pointer hover:border-b-2 focus:border-b-2 active:border-b-2"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-dustLight hover:text-dustDark focus:border-dustLight focus:ring-dustLight active:border-dustLight cursor-pointer hover:border-b-2 focus:border-b-2"
                    to="/about"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-dustLight hover:text-dustDark focus:border-dustLight focus:ring-dustLight active:border-dustLight cursor-pointer hover:border-b-2 focus:border-b-2"
                    to="/article"
                  >
                    ARTICLE
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-dustLight hover:text-dustDark focus:border-dustLight focus:ring-dustLight active:border-dustLight cursor-pointer hover:border-b-2 focus:border-b-2"
                    to="/service"
                  >
                    SERVICE
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:border-dustLight hover:text-dustDark focus:border-dustLight focus:ring-dustLight active:border-dustLight cursor-pointer hover:border-b-2 focus:border-b-2"
                    to="/contact"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
              <div className="hidden items-center space-x-5 text-center xl:flex">
                <Link
                  className="bg-dustDark hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark flex h-8 w-28 items-center justify-center space-x-2 rounded-2xl p-2 text-center text-sm text-white"
                  to="/SignIn"
                >
                  <i className="fas fa-user-check"></i>
                  <p className="text-2xl">LOGIN</p>
                </Link>
                {/*  <Link
                className="bg-dustDark hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark flex h-8 w-28 items-center justify-center space-x-2 rounded-2xl p-2 text-center text-sm text-white"
                to="/SignUp"
              >
                <i className="fas fa-user-edit"></i>
                <p className="text-2xl">SIGN UP</p>
            </Link>*/}
              </div>
            </div>
            {/* nav responsive */}

            <div className="relative md:grid-cols-none xl:flex-col">
              <div className="m-5 flex items-center space-x-3 xl:hidden">
                <Link
                  className="bg-dustDark hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark flex h-7 w-7 items-center justify-center rounded-full p-3 text-center text-sm text-white"
                  to="/signIn"
                >
                  <i className="fas fa-user-check"></i>
                </Link>
                {/*<Link
                className="bg-dustDark  hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark flex h-7 w-7 items-center justify-center rounded-full p-3 text-center text-sm text-white"
                to="/signUp"
              >
                <i className="fas fa-user-edit"></i>
              </Link>*/}
              </div>
            </div>
            <button
              className="navbar-burger text-dustDark mr-12 self-center md:hidden lg:hidden xl:hidden"
              onClick={() => setDropdown(!dropdown)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </nav>
          {dropdown && (
            <ul className=" font-heading mx-auto mt-1 w-full  flex-col items-center justify-center text-sm font-semibold sm:flex md:flex ">
              <li className="hover:bg-dustLight  hover:text-dustDark focus:bg-dustLight focus:ring-dustLight active:bg-dustLight w-full cursor-pointer rounded-sm p-2 px-4 text-center">
                <Link to="/home" className="cursor-pointer ">
                  HOME
                </Link>
              </li>
              <li className="hover:bg-dustLight  hover:text-dustDark focus:bg-dustLight focus:ring-dustLight active:bg-dustLight w-full cursor-pointer rounded-sm p-2 px-4 text-center">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="hover:bg-dustLight  hover:text-dustDark focus:bg-dustLight focus:ring-dustLight active:bg-dustLight w-full cursor-pointer rounded-sm p-2 px-4 text-center">
                <Link to="/article">ARTICLE</Link>
              </li>
              <li className="hover:bg-dustLight  hover:text-dustDark focus:bg-dustLight focus:ring-dustLight active:bg-dustLight w-full cursor-pointer rounded-sm p-2 px-4 text-center">
                <Link to="/service">SERVICE</Link>
              </li>
              <li className="hover:bg-dustLight  hover:text-dustDark focus:bg-dustLight focus:ring-dustLight active:bg-dustLight w-full cursor-pointer rounded-sm p-2 px-4 text-center">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default NavBarComponent;
