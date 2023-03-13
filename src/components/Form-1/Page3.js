import React, { useState } from "react";
import "../Style/Page3.css";

const Page3 = ({ setPage }) => {
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);

  const handle1 = () => {
    setBorder1((perv) => !perv);
  };

  return (
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
              className={`div1 ${border1 ? "Border" : "border"}`}
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

            <div className=" border px-4 py-2 rounded-md cursor-pointer flex justify-between items-center">
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

            <div className=" border px-4 py-2 rounded-md cursor-pointer flex justify-between items-center">
              <div className="left flex space-x-3 ">
                <input
                  className=" cursor-pointer w-5 rounded-full"
                  type="checkbox"
                />
                <div className="">
                  <p className=" font-semibold">Customizable profile</p>
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
            onClick={() => setPage((next) => next - 1)}
          >
            Go Back
          </button>
          <button
            className=" bottom-5 right-4 absolute next-stp py-2 px-4 text-sm  font-semibold rounded-md border border-indigo-400 text-white 
     bg-indigo-600 hover:bg-indigo-500      hover:border-transparent focus:outline-none  focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            type="submit"
            onClick={() => setPage((next) => next + 1)}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
