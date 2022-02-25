import React from "react";

const Inputs = (props) => {
  return (
    <>
      <label>{props.name}</label>
      <input type="text" className="" placeholder={props.name} />
    </>
  );
};

export default Inputs;
