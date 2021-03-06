import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
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
    <section className="relative z-10 overflow-hidden bg-[#142534] py-20 lg:py-32">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center lg:justify-between">
          <div className="w-full px-4 lg:w-1/2  xl:w-6/12">
            <div className="mx-9 mb-12 max-w-xl text-center lg:mb-0 lg:text-justify">
              <span className="text-dustLight mb-4 block text-7xl font-semibold">
                Contact Us
              </span>
              <h2
                className="
                  mb-6
                  text-3xl
                  font-bold
                  uppercase
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                  "
              >
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-xl leading-relaxed text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>
            </div>
          </div>

          <div className="w-full justify-center px-4 lg:mx-auto xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="
                       text-dustDark
                        border-dustLight
                        focus:border-dustrang
                        w-full
                        resize-none rounded
                        border py-3
                        px-4
                        text-base
                        outline-none
                        focus-visible:shadow-none
                        "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red text-base">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="
                    text-dustDark
                    border-dustLight
                        focus:border-dustrang
                        w-full
                        resize-none rounded
                        border py-3
                        px-4
                        text-base
                        outline-none
                        focus-visible:shadow-none
                        "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red text-base">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="
                      text-dustDark
                        border-dustLight
                        focus:border-dustrang
                        w-full
                        resize-none rounded
                        border py-3
                        px-4
                        text-base
                        outline-none
                        focus-visible:shadow-none
                        "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red text-base">
                    {formik.errors.phone}
                  </div>
                ) : null}
                <div className="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    name="content"
                    className="
                        text-dustDark
                        border-dustLight
                        focus:border-dustrang
                        w-full
                        resize-none rounded
                        border py-3
                        px-4
                        text-base
                        outline-none
                        focus-visible:shadow-none
                        "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.content}
                  ></textarea>
                  {formik.touched.content && formik.errors.content ? (
                    <div className="text-red text-base">
                      {formik.errors.content}
                    </div>
                  ) : null}
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                    bg-dustDark
                    border-dustLight
                    hover:bg-dustM
                   shadow-dustLight hover:shadow-dustDark w-full rounded-full border  p-3 font-bold
                    text-white shadow-md
                    transition
                    hover:bg-opacity-90
                    hover:text-black
                    "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
