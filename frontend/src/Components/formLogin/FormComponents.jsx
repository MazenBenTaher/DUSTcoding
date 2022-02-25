import React from "react";
import ButtonComponent from "../Inputs/ButtonComponent";
import InputComponent from "../Inputs/InputComponent";
import { useFormik } from "formik";
import * as Yup from "yup";
const FormComponents = () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        content: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(40, "Must be 40 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),

        phone: Yup.string()
          .min(8, "Must be 8 numbers ")
          .max(8, "Must be 8 numbers ")
          .required("Required"),
        content: Yup.string()
          .max(5000, "Must be talk about your subject")
          .required("Required"),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <form>
      <div>
        <InputComponent name="User Name" type="text" />
      </div>
      <div>
        <InputComponent name="Password" type="password" />
      </div>
      <div className="grid items-center justify-center">
        <ButtonComponent
          name="Sign In"
          type="submit"
          className="h-7  w-80  cursor-pointer rounded-2xl bg-dustDark text-center align-middle  text-white hover:bg-dustLight hover:text-dustDark focus:bg-dustLight focus:text-dustDark"
        />
      </div>
    </form>
  );
};

export default FormComponents;
