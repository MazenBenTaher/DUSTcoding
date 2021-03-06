import React from "react";
import Dust from "../../../assets/images/dust.png";
const LoginPage = () => {
  return (
    <div class="bg-dustLight flex h-screen w-full items-center justify-center">
      <form>
        <div class="w-screen max-w-sm rounded-xl bg-white px-10 py-8 shadow-md">
          <img class="mx-auto mb-4 h-14 w-1/2" src={Dust} alt="DUSTcoding" />
          <div class="space-y-4">
            <h1 class="text-dustDark text-center text-2xl font-semibold">
              Tools Admin
            </h1>
            <div>
              <label for="email" class="text-dustDark mb-1 block font-semibold">
                Username
              </label>
              <input
                type="text"
                name="username"
                class="border-dustring w-full rounded-md border-2 bg-white px-4 py-2 outline-none"
              />
            </div>

            <div>
              <label
                for="password"
                class="text-dustDark mb-1 block font-semibold"
              >
                Password
              </label>
              <input
                type="text"
                name="password"
                class="border-dustring w-full rounded-md border-2 bg-white px-4 py-2 outline-none"
              />
            </div>
          </div>
          <button class="border-dustring  bg-dustring hover:bg-dustLight hover:shadow-dustM hover:text-dustring mt-4 w-full rounded-md py-2 font-semibold tracking-wide text-white hover:shadow-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
