import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import "../Style/Page1.css";

const Page1 = ({ setPage }) => {
  const phoneRegExp = /((\+88)?01[3-9]\d{8})/g;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      setPage((prev) => prev + 1);
    },
    validationSchema: yup.object({
      name: yup.string().min(3, "Name is required").required(),
      email: yup.string().email("Email is required").required(),
      phone: yup
        .string()
        .min(11, "Name is required")
        .max(11)
        .matches(phoneRegExp, "Must be valid BD number")
        .required(),
    }),
  });

  return (
    <div className=" h-full p-4 flex justify-center relative">
      <div className="min-w-full">
        <div className="mt-6">
          <h1 className="  title text-3xl font-bold">Personal info</h1>
          <p className=" mt-2 text-gray-500">
            Please provide your name,email address,and phone number.
          </p>
        </div>
        <div className=" mt-12 flex">
          <form
            onSubmit={formik.handleSubmit}
            className=" min-w-full space-y-3"
          >
            <div className="label flex justify-between">
              <label htmlFor="name">Name</label>

              {formik.touched.name && formik.errors.name && (
                <span className=" text-red-500 ml-4">{formik.errors.name}</span>
              )}
            </div>
            <input
              className=" outline-gray-300 px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              // required
              id="name"
              placeholder="e.g. Stephen King"
              type="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <div className="label flex justify-between">
              <label htmlFor="email">Email Address</label>

              {formik.touched.email && formik.errors.email && (
                <span className=" text-red-500 ml-4">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <input
              className=" outline-gray-300 px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              // required
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="label flex justify-between">
              <label htmlFor="phone">Phone Number</label>

              {formik.touched.phone && formik.errors.phone && (
                <span className=" text-red-500 ml-4">
                  {formik.errors.phone}
                </span>
              )}
            </div>
            <input
              className=" outline-gray-300 px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              // required
              type="phone"
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <div className=" bottom-5 right-4 absolute">
              <button
                // onClick={handleNext}
                className="next-stp py-2 px-4 text-sm  font-semibold rounded-md border border-indigo-400 text-white 
              bg-indigo-600 hover:bg-indigo-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                type="submit"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page1;
