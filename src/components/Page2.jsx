import React, { useState } from "react";
import "../Style/Page2.css";

import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import Toggle from "./Toggle";

const Page2 = ({ setPage }) => {
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

  return (
    <div className=" h-full p-4 flex justify-center relative">
      <div className="min-w-full">
        <div className="mt-6">
          <h1 className="  title text-3xl font-bold">Select your plan</h1>
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
                  <p className=" font-bold">Arcade</p>
                  <p className=" text-sm text-zinc-500">$9/mo</p>
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
            onClick={() => setPage((prev) => prev - 1)}
          >
            Go Back
          </button>
          <button
            className=" bottom-5 right-4 absolute next-stp py-2 px-4 text-sm  font-semibold rounded-md border border-indigo-400 text-white 
         bg-indigo-600 hover:bg-indigo-500      hover:border-transparent focus:outline-none  focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            type="submit"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
