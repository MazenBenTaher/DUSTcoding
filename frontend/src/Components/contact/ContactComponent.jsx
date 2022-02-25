import React from "react";
import logo from "../../assets/images/logo_white.png";
import { useFormik } from "formik";
import * as Yup from "yup";
const ContactComponent = () => {
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
    <div className="bg-contact-pattern md:py-15 bg-cover bg-center px-5 py-20">
      <div className="mx-5 justify-between md:flex md:space-y-14">
        <div className="grid-rows-7 grid w-1/2 text-3xl font-medium text-white ">
          <h1 className="form-range text-center text-5xl leading-6">
            Let's get in touch
          </h1>
          <p className="w-1/2 text-justify text-2xl">
            A Tunisian SSII that creates high quality professional websites
            using the most advanced web solutions with the highest standards.
          </p>
          <p className="indent-16">+216 ?? 000 000</p>
          <p className="indent-16">+216 ?? 000 000</p>
          <p className="indent-16">Cyber Park,Tozeur,Tunis</p>
          <p className="indent-16">ِcontact@dustcoding.com</p>
          <div className="mx-50">
            <img className="w-1/2 " src={logo} alt="logo" />
          </div>
        </div>
        <form
          className="w-full max-w-lg space-y-3 object-right md:mt-10"
          onSubmit={formik.handleSubmit}
        >
          <div className="-mx-3  flex flex-wrap">
            <div className="w-full px-3">
              <input
                className="focus:border-dustM  border-dustLight  block w-full appearance-none rounded-md border bg-white py-3 px-4 leading-tight text-black focus:bg-white focus:outline-none"
                id="name"
                name="name"
                type="text"
                placeholder="USER NAME"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red text-base">{formik.errors.name}</div>
              ) : null}
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <input
                className="focus:border-dustM border-dustLight block w-full appearance-none rounded-md border bg-white py-3 px-4 leading-tight text-black focus:bg-white focus:outline-none"
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red text-base">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <input
                className="focus:border-dustM border-dustLight block w-full appearance-none rounded-md border bg-white py-3 px-4 leading-tight text-black focus:bg-white focus:outline-none"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red text-base">{formik.errors.phone}</div>
              ) : null}
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <textarea
                className=" no-resize focus:border-dustM border-dustLight mb-3 block h-48 w-full resize-none appearance-none rounded-md border bg-white py-3 px-4 leading-tight text-black focus:bg-white focus:outline-none"
                id="content"
                name="content"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.content}
                placeholder="Type Your Message"
              ></textarea>
              {formik.touched.content && formik.errors.content ? (
                <div className="text-red text-base">
                  {formik.errors.content}
                </div>
              ) : null}
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="focus:shadow-outline hover:bg-dustDark bg-dustM hover:shadow-dustLight shadow-dustDark   h-auto w-52 items-center rounded-full  py-2  px-4 font-bold text-white shadow-md focus:outline-none"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
