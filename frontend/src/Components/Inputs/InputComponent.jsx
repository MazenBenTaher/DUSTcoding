import React from "react";

const InputComponent = (props) => {
  return (
    <div className="grid items-center">
      <label className="font-medium first-letter:uppercase">{props.name}</label>
      <input
        className="h-10  rounded-lg bg-white p-2 outline-dustLight"
        type={props.type}
        name={props.name}
        placeholder={props.name}
      />
    </div>
  );
};

export default InputComponent;
