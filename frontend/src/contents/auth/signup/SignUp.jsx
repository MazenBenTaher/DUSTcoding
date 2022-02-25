import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import dust from "../../../assets/images/dust.png";
import contact from "../../../assets/images/contact.png";

const SignUp = () => {
  const [FormData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
  });
  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { username, email, password, passwordConfirm, phoneNumber } = FormData;

  return (
    <div className="from-dustLight to-dustDark flex min-h-screen items-center justify-center bg-gradient-to-r">
      <div className="container mx-auto">
        <div className="my-12 flex justify-center px-6 ">
          <div className="flex h-2/3 w-3/4 lg:w-11/12 xl:w-3/4">
            <div className="flex shadow-lg">
              <div className=" rounded-b-2xl rounded-l-2xl rounded-r-none bg-white  px-20 py-20 text-left ">
                <div className="flex w-80 justify-center ">
                  <img src={dust} alt="fireSpot" />
                </div>
                <h3 className="text-center text-2xl font-bold">
                  Register and join us Now
                </h3>
                <form>
                  <div className="mt-4">
                    <div className="flex space-x-4">
                      <div>
                        <label className="block">Username</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={username}
                          placeholder="Username"
                          onChange={onChange}
                          className="10 1 mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={onChange}
                          placeholder="Username or Email"
                          className="10 1 mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4">
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
                      <div className="mt-4">
                        <label className="block">Confirm Password</label>
                        <input
                          type="password"
                          name="passwordConfirm"
                          value={passwordConfirm}
                          onChange={onChange}
                          id="passwordConfirm"
                          placeholder="Confirm Password"
                          className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block">Phone Number</label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={onChange}
                        placeholder="Phone Number"
                        className="10 1 mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="m-5 flex items-center justify-center space-x-4">
                      <Link
                        to="/home"
                        className="bg-dustDark hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark mt-4 flex h-11 w-28 items-center justify-center   space-x-2 rounded-2xl p-2 text-center text-white"
                      >
                        <i className="fas fa-angle-left text-sm"></i>
                        <p>Return</p>
                      </Link>
                      <button
                        className="bg-dustDark hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark mt-4 flex h-11 w-28 items-center justify-center  space-x-2 rounded-2xl p-2 text-center text-white"
                        onSubmit={onSubmit}
                      >
                        <i className="fas fa-check text-sm"></i> <p>Sign Up</p>
                      </button>
                    </div>
                    <div className="justify-center text-center">
                      <Link
                        to="/SignIn"
                        className="text-dustDark hover:underline"
                      >
                        You already have an account !
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

export default SignUp;
