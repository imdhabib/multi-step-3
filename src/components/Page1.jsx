import React from "react";
import "../Style/Page1.css";

const Page1 = () => {
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
          <form className=" min-w-full space-y-3">
            <div className="label flex justify-between">
              <label for="name">Name</label>
              <p class="error text-xs tracking-wider text-red-600 font-medium">
                This Field Is Required
              </p>
            </div>
            <input
              className="outline-none px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              required
              type="name"
              id="name"
              placeholder="e.g. Stephen King"
            />
            <div className="label flex justify-between">
              <label for="email">Email Address</label>
              <p class="error text-xs tracking-wider text-red-600 font-medium">
                This Field Is Required
              </p>
            </div>
            <input
              className="outline-none px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              required
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
            />
            <div className="label flex justify-between">
              <label for="phone">Phone Number</label>
              <p class="error text-xs tracking-wider text-red-600 font-medium">
                This Field Is Required
              </p>
            </div>
            <input
              className="outline-none px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              type="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              required
            />
          </form>
        </div>
        <div className=" bottom-5 right-4 absolute">
          {/* <button className="prev-stp " type="button">
            Go Back
          </button> */}
          <button
            className="next-stp py-2 px-4 text-sm  font-semibold rounded-md border border-indigo-400 text-white 
            bg-indigo-600 hover:bg-indigo-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            type="submit"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
