import React from "react";
import { useState } from "react";
import dust from "../../../assets/images/dust.png";
import contact from "../../../assets/images/contact.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [FormData, setFromData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = FormData;

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="from-dustLight to-dustDark flex min-h-screen items-center justify-center bg-gradient-to-r">
      <div className="container mx-auto">
        <div className="my-12 flex justify-center  px-6 ">
          <div className="flex w-full lg:w-11/12 xl:w-3/4 ">
            <div className="flex shadow-lg">
              <div className=" rounded-b-2xl rounded-l-2xl rounded-r-none bg-white  px-20 py-20 text-left ">
                <div className="flex w-80 justify-center ">
                  <img src={dust} alt="fireSpot" />
                </div>
                <h3 className="text-center text-2xl font-bold">
                  Login to your account
                </h3>
                <form onSubmit={onSubmit}>
                  <div className="mt-4">
                    <div>
                      <label className="block">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email"
                        className="10 1 mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                      {/*    <span className="text-x text-red-600 tracking-wide">
                        Email field is required
  </span>*/}
                    </div>
                    <div className="mt-4">
                      <label className="block">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                        className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="m-5 grid items-center justify-center">
                      <button className="bg-dustDark hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark mt-4 flex h-11 w-28 items-center justify-center  space-x-5 rounded-2xl p-2 text-center text-white">
                        <i className="fa fa-key h-auto text-base"></i>
                        <p>Login</p>
                      </button>
                      <Link to="#" className="text-dustDark hover:underline">
                        Forgot password ?
                      </Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        to="/home"
                        className="bg-dustDark hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark mt-4 flex h-11 w-28 items-center justify-center space-x-2 rounded-2xl p-2 text-center text-xl text-white"
                      >
                        <i className="fas fa-angle-left"></i>
                        <p>return</p>
                      </Link>
                      <Link
                        to="/SignUp"
                        className="bg-dustDark hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark mt-4 flex h-11 w-28 items-center justify-center space-x-2 rounded-2xl p-2 text-center text-xl text-white"
                      >
                        <p>Sign Up</p>
                        <i className="fas fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="px-19 py-19 text-left shadow-lg">
                <img
                  src={contact}
                  alt="fireSpot"
                  className="h-full rounded-b-none rounded-l-none  rounded-r-2xl object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
