import React from "react";

import logo from "../images/icon-thank-you.svg";
const Page5 = () => {
  return (
    <div className="h-full p-4 flex justify-center items-center">
      <div className=" ">
        <img className=" mx-auto" src={logo} alt="thank img" />
        <div>
          <h1 className=" text-center text-2xl font-semibold mt-6">
            Thank you!
          </h1>
          <p className=" text-center px-4 mt-2 text-gray-500 text-lg">
            Thanks for comfirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page5;
