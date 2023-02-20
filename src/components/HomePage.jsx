import React from "react";
// import NavPage from "./NavPage";
// import Page1 from "./Page1";
import "../Style/HomePage.css";
import Page1 from "./Page1";

const HomePage = () => {
  return (
    <div className=" h-screen justify-center items-center mx-auto flex">
      <div>
        <div className="containers  grid grid-cols-6 p-4">
          <div className="leftSide col-span-2 text-white">
            <div className="stepBox flex space-x-4">
              <span className=" active w-10 h-10 border-2  justify-center flex items-center rounded-full text-lg font-bold">
                1
              </span>
              <div>
                <p className=" text-gray-300 text-sm">STEP 1</p>
                <h3 className=" text-white text-md font-bold uppercase">
                  Your Info
                </h3>
              </div>
            </div>
            <div className="stepBox flex space-x-4">
              <span className=" w-10 h-10 border-2  justify-center flex items-center rounded-full text-lg font-bold">
                2
              </span>
              <div>
                <p className=" text-gray-300 text-sm ">STEP 2</p>
                <h3 className=" text-white text-md font-bold uppercase">
                  Your Info
                </h3>
              </div>
            </div>
            <div className="stepBox flex space-x-4">
              <span className=" w-10 h-10 border-2  justify-center flex items-center rounded-full text-lg font-bold">
                3
              </span>
              <div>
                <p className=" text-gray-300 text-sm ">STEP 3</p>
                <h3 className=" text-white text-md font-bold uppercase">
                  Your Info
                </h3>
              </div>
            </div>
            <div className="stepBox flex space-x-4">
              <span className=" w-10 h-10 border-2  justify-center flex items-center rounded-full text-lg font-bold">
                4
              </span>
              <div>
                <p className=" text-gray-300 text-sm ">STEP 4</p>
                <h3 className=" text-white text-md font-bold uppercase">
                  Your Info
                </h3>
              </div>
            </div>
          </div>
          <div className="rightSide ml-4 h-full col-span-4">
            <Page1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
