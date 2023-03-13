import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import "../Style/HomePage.css";
import "../Style/Page1.css";
import "../Style/Page2.css";
import "../Style/Page3.css";

//second page img src start here
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import Toggle from "./Toggle";

const HomePage = () => {
  const formArray = [1, 2, 3, 4];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [info, setInfo] = useState([
    { step: "STEP1", info: "Your Info" },
    { step: "STEP2", info: "Your Info" },
    { step: "STEP3", info: "Your Info" },
    { step: "STEP4", info: "Your Info" },
  ]);
  const phoneRegExp = /((\+88)?01[3-9]\d{8})/g;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      setFormNo(formNo + 1);
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

  const next = () => {
    setFormNo(formNo + 1);
  };
  const back = () => {
    setFormNo(formNo - 1);
  };

  // second page sart here
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);

  const Card1 = () => {
    setBorder1((prev) => !prev);
  };
  const Card2 = () => {
    setBorder2((prev) => !prev);
  };

  const Card3 = () => {
    setBorder3((prev) => !prev);
  };
  // second page end here

  // Third page start here
  const handle1 = () => {
    setBorder1((perv) => !perv);
  };
  const handle2 = () => {
    setBorder2((perv) => !perv);
  };
  const handle3 = () => {
    setBorder3((perv) => !perv);
  };

  // Forth page start here
  const handleClick = () => {
    // setPage(5);
  };
  return (
    <div className=" h-screen justify-center items-center mx-auto flex">
      <div className="">
        <div className="containers grid grid-cols-3 p-4 gap-x-6">
          <div className="leftSide text-white flex">
            <div></div>
            <div className=" number">
              {formArray &&
                formArray.map((value, ind) => (
                  <div className="" key={ind}>
                    <div
                      className={`${
                        formNo - 1 === ind
                          ? " text-black text-lg bg-[#9ec5eb]"
                          : "none"
                      } border h-8 w-8  flex items-center justify-center rounded-full`}
                    >
                      {value}
                    </div>
                  </div>
                ))}
            </div>
            <div>
              {info &&
                info.map((steps, ind) => (
                  <div className="info" key={ind}>
                    <div className=" text-white text-md font-bold uppercase">
                      {steps.info}
                    </div>
                    <div className=" text-gray-300 text-sm ">{steps.step}</div>
                  </div>
                ))}
            </div>
          </div>
          <div className="rightSide ml-4 h-full col-span-2">
            {/* First page start here */}
            {formNo === 1 && (
              <div className=" h-full p-4 flex justify-center relative">
                <div className="min-w-full">
                  <div className="mt-6">
                    <h1 className="  title text-3xl font-bold">
                      Personal info
                    </h1>
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
                          <span className=" text-red-500 ml-4">
                            {formik.errors.name}
                          </span>
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
                          // onClick={next}
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
            )}
            {/* Second page start here */}

            {formNo === 2 && (
              <div className=" h-full p-4 flex justify-center relative">
                <div className="min-w-full">
                  <div className="mt-6">
                    <h1 className="  title text-3xl font-bold">
                      Select your plan
                    </h1>
                    <p className=" mt-2 text-gray-500">
                      You have the option of monthly or yearly billing
                    </p>
                  </div>

                  {/* body section */}
                  <div>
                    <div className="PlanCard mt-8 grid grid-cols-3">
                      <div className="black-border ">
                        <div
                          onClick={Card1}
                          className={`div ${border1 ? "Border" : "border"}`}
                        >
                          <img className="" src={arcade} alt="arcade" />
                          <div className=" bottom-4 left-4 absolute ">
                            <div className=" font-bold">Arcade</div>
                            <div className=" text-sm text-zinc-500">$9/mo</div>
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={Card2}
                        className={`div ${border2 ? "Border" : "border"}`}
                      >
                        <img className="" src={advanced} alt="arcade" />
                        <div className=" bottom-4 left-4 absolute">
                          <p className=" font-bold">Advance</p>
                          <p className=" text-sm text-zinc-500">$9/mo</p>
                        </div>
                      </div>
                      <div
                        onClick={Card3}
                        className={`div ${border3 ? "Border" : "border"}`}
                      >
                        <img className="" src={pro} alt="arcade" />
                        <div className=" bottom-4 left-4 absolute">
                          <p className=" font-bold">Pro</p>
                          <p className=" text-sm text-zinc-500">$9/mo</p>
                        </div>
                      </div>
                    </div>
                    <div className="btnSection p-2 mt-10 flex bg-slate-100 justify-center items-center space-x-2">
                      <p className=" font-bold">Monthly</p>
                      <span>
                        <Toggle />
                      </span>
                      <p className=" font-bold">Yearly</p>
                    </div>
                  </div>
                  {/* body section end here*/}
                  <div className="">
                    <button
                      className="prev-stp  bottom-5 left-4 absolute "
                      type="button"
                      onClick={back}
                    >
                      Go Back
                    </button>
                    <button
                      className=" bottom-5 right-4 absolute next-stp py-2 px-4 text-sm  font-semibold rounded-md border border-indigo-400 text-white 
                     bg-indigo-600 hover:bg-indigo-500 hover:border-transparent focus:outline-none  focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                      type="submit"
                      onClick={next}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            )}

            {formNo === 3 && (
              <div className=" h-full p-4 flex justify-center relative">
                <div className="min-w-full">
                  <div className="mt-6">
                    <h1 className="  title text-3xl font-bold">Pick add-ons</h1>
                    <p className=" mt-2 text-gray-500">
                      Add-ons help enhance your gaming experience
                    </p>
                  </div>

                  {/* body section */}
                  <div>
                    <div className="PlanCard mt-8 space-y-4">
                      <div
                        onClick={handle1}
                        className={`div1 ${border1 ? "Borders" : "border"}`}
                      >
                        <div className="left flex space-x-3 ">
                          <input
                            className=" cursor-pointer w-5 rounded-full"
                            type="checkbox"
                          />
                          <div className="">
                            <p className=" font-semibold">Online service</p>
                            <p className=" text-xs text-gray-500">
                              Access to multiplayer games
                            </p>
                          </div>
                        </div>
                        <div className="right">
                          <p className=" text-xs text-indigo-500">+$1/mo</p>
                        </div>
                      </div>

                      <div
                        onClick={handle2}
                        className={`div1 ${border2 ? "Borders" : "border"}`}
                      >
                        <div className="left flex space-x-3 ">
                          <input
                            className=" cursor-pointer w-5 rounded-full"
                            type="checkbox"
                          />
                          <div className="">
                            <p className=" font-semibold">Large storage</p>
                            <p className=" text-xs text-gray-500">
                              Extra 1TB of cloude save
                            </p>
                          </div>
                        </div>
                        <div className="right">
                          <p className=" text-xs text-indigo-500">+$2/mo</p>
                        </div>
                      </div>

                      <div
                        onClick={handle3}
                        className={`div1 ${border3 ? "Borders" : "border"}`}
                      >
                        <div className="left flex space-x-3 ">
                          <input
                            className=" cursor-pointer w-5 rounded-full"
                            type="checkbox"
                          />
                          <div className="">
                            <p className=" font-semibold">
                              Customizable profile
                            </p>
                            <p className=" text-xs text-gray-500">
                              Custom theme on your profile
                            </p>
                          </div>
                        </div>
                        <div className="right">
                          <p className=" text-xs text-indigo-500">+$2/mo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* body section end here*/}
                  <div className="">
                    <button
                      className="prev-stp  bottom-5 left-4 absolute "
                      type="button"
                      onClick={back}
                    >
                      Go Back
                    </button>
                    <button
                      className=" bottom-5 right-4 absolute next-stp py-2 px-4 text-sm  font-semibold rounded-md border border-indigo-400 text-white 
                      bg-indigo-600 hover:bg-indigo-500      hover:border-transparent focus:outline-none  focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                      type="submit"
                      onClick={next}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            )}

            {formNo === 4 && (
              <div className=" h-full p-4 flex justify-center relative">
                <div className="min-w-full">
                  <div className="mt-6">
                    <h1 className="  title text-3xl font-bold">Finishing Up</h1>
                    <p className=" mt-2 text-gray-500">
                      Double-check everything looks okay before confirming
                    </p>
                  </div>

                  {/* body section */}
                  <div>
                    <div className="PlanCard mt-8 space-y-4">
                      <div className=" px-4 py-2 rounded-md cursor-pointer bg-slate-100">
                        <div className="left min-w-full flex justify-between items-center">
                          <div>
                            <h3 className=" font-semibold">Arcade (Monthly)</h3>
                            <a className=" text-gray-400 underline" href="#b">
                              Change
                            </a>
                          </div>
                          <p className=" text-xs text-indigo-500">+$2/mo</p>
                        </div>
                        <hr className=" mt-2 bg-slate-700" />
                        <p className="mt-1">No Add-on selected</p>
                      </div>
                      <div className=" flex justify-between items-center px-4">
                        <p className=" text-gray-500">Total (per year)</p>
                        <p className=" text-indigo-500 font-extrabold">
                          +S90/yr
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* body section end here*/}
                  <div className="">
                    <button
                      className="prev-stp  bottom-5 left-4 absolute "
                      type="button"
                      onClick={back}
                    >
                      Go Back
                    </button>
                    <button
                      className=" bottom-5 right-4 absolute next-stp py-2 px-4 text-sm  font-semibold rounded-md border border-indigo-400 text-white 
                      bg-indigo-600 hover:bg-indigo-500 hover:border-transparent focus:outline-none  focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                      type="submit"
                      onClick={handleClick}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
