import React, { useState } from "react";

import "../Style/HomePage.css";
import ExmPg2 from "./ExmPg2";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

const HomePage = () => {
  const [Page, setPage] = useState(1);

  return (
    <div className=" h-screen justify-center items-center mx-auto flex">
      <div className="">
        <div className="containers grid grid-cols-3 p-4 gap-x-6">
          <div className="leftSide col-span-1 text-white">
            <div className="stepBox flex  space-x-4">
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
          <div className="rightSide ml-4 h-full col-span-2">
            {Page === 1 && <Page1 setPage={setPage} />}
            {Page === 2 && <Page2 setPage={setPage} />}
            {Page === 3 && <Page3 setPage={setPage} />}
            {Page === 4 && <Page4 setPage={setPage} />}
            {Page === 5 && <Page5 setPage={setPage} />}
            {Page === 6 && <ExmPg2 />}
            {/* <Page2 /> */}
            {/* <ExmPg2 /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
