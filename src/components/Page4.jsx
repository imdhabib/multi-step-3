import React from "react";

const Page4 = ({ setPage }) => {
  const handleClick = () => {
    setPage(5);
  };
  return (
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
              <p className=" text-indigo-500 font-extrabold">+S90/yr</p>
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
          bg-indigo-600 hover:bg-indigo-500 hover:border-transparent focus:outline-none  focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            type="submit"
            onClick={handleClick}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
