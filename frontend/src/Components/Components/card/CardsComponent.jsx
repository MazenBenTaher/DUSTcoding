import React from "react";

const CardsComponent = (name, icon) => {
  return (
    <>
      <div className=" mt-6 grid h-72  w-48 content-center items-center justify-center rounded-lg bg-white px-7 py-11  text-center">
        <div className="mx-auto text-7xl ">{icon}</div>
        <div className="text-md ">{name}</div>
        <div>
          <button
            className="text-dustLight bg-dustDark hover:bg-dustLight hover:text-dustDark rounded-2xl py-2 px-4 text-2xl"
            type="submit"
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default CardsComponent;
