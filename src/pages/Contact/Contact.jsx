import { useEffect, useState } from "react";
// import style from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  function submitForm(values) {
    console.log(values);
  }
  let validateForm = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(25, "Name must be at most 25 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must have Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    age: Yup.number()
      .required("Age is required")
      .min(18, "Age must be at least 18")
      .max(100, "Age must be at most 100"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
    },
    onSubmit: submitForm,
    validationSchema: validateForm,
  });

  return (
    <>
      <div className="regitser section w-3/4 mx-auto pt-12 pb-10">
        <h1 className="text-3xl font-bold text-teal-500 text-center mb-5">
          CONTACT US <i className="fa-regular fa-circle-user ms-2"></i>
        </h1>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="input-name">
            <label htmlFor="name" className="block text-gray-600">
              Name :
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              value={formik.values.name}
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="my-form-control"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 my-1">*{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="input-email mt-2">
            <label htmlFor="email" className="block text-gray-600">
              Email :
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              name="email"
              value={formik.values.email}
              id="email"
              className="my-form-control"
              placeholder="Enter Your Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 my-1">*{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="input-password mt-2">
            <label htmlFor="password" className="block text-gray-600">
              Password :
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              name="password"
              value={formik.values.password}
              id="password"
              className="my-form-control"
              placeholder="Enter Your Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 my-1">*{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="input-age mt-2">
            <label htmlFor="age" className="block text-gray-600">
              Age :
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              name="age"
              value={formik.values.age}
              id="age"
              className="my-form-control"
              placeholder="Enter Your Age"
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="text-red-500 my-1">*{formik.errors.age}</div>
            ) : null}
          </div>

          <button type="submit" className="btn mt-5 font-semibold text-xl">
            {" "}
            Register
          </button>
        </form>
      </div>
    </>
  );
}
