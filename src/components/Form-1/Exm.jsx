import React, { useState } from "react";

import logo1 from "../images/icon-arcade.svg";
import logo2 from "../images/icon-advanced.svg";
import logo3 from "../images/icon-pro.svg";
import Toggle from "./Toggle";
import "../Style/ExmPag2.css";

const ExmPg2 = () => {
  const [border1, setBorder] = useState(false);
  const [Info, setInfo] = useState([
    {
      id: 1,
      img: <img src={logo1} alt="logo" />,
      title: `Arcade`,
      Tk: "$9/mo",
      isCompleted: false,
    },
    {
      id: 2,
      img: <img src={logo2} alt="logo" />,
      title: `Advance`,
      Tk: "$12/mo",
      isCompleted: false,
    },
    {
      id: 3,
      img: <img src={logo3} alt="logo" />,
      title: `Pro`,
      Tk: "$15/mo",
      isCompleted: false,
    },
  ]);
  // console.log(Info);

  const CardClick = (id) => {
    setInfo((info) =>
      info.map((crd) => {
        if (crd.id === id) {
          setBorder(true);
        } else {
          setBorder(false);
        }
        return info;
      })
    );
    if (Info.id === id) {
      setBorder(true);
    }

    // alert(id);
    // if (Info.filter((crd) => crd.id === id)) {
    //   setBorder(true);
    // } else {
    //   setBorder(false);
    // }

    // setInfo((prev) =>
    //   prev.map((crd) => {
    //     if (crd.id === id) {
    //       return {
    //         ...crd,
    //         isCompleted: !crd.isCompleted,
    //       };
    //     }
    //     return crd;
    //   })
    // );

    // let infos = Info.filter((crd) => {
    //   if (crd.id !== id) {
    //     setBorder(true);
    //   } else {
    //     setBorder(false);
    //   }
    // });
    // alert(infos.id);
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
        {/* Panel Card start here */}
        <div className="PlanCard mt-8 grid grid-cols-3">
          {Info &&
            Info.map((card, ind) => {
              return (
                <div key={ind}>
                  {/* <p>{card.img}</p>
                  <h3>{card.title}</h3>
                  <p>{card.Tk}</p> */}

                  <div
                    className={`div ${border1 ? "Border" : "none"}`}
                    onClick={() => CardClick(card.id)}
                    // style={{
                    //   border1: card.isCompleted ? "Border" : "none",
                    // }}
                  >
                    {/* <div className=""> */}
                    <span>{card.img}</span>
                    <div className=" content">
                      <p className=" font-bold">{card.title}</p>
                      <p className=" text-sm text-zinc-500">{card.Tk}</p>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              );
            })}
        </div>
        {/* Panel Card end here */}
        <div>
          <div className="PlanCard mt-8 grid grid-cols-3"></div>
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
            // onClick={() => setPage((prev) => prev - 1)}
          >
            Go Back
          </button>
          <button
            className=" bottom-5 right-4 absolute next-stp py-2 px-4 text-sm  font-semibold rounded-md border border-indigo-400 text-white 
     bg-indigo-600 hover:bg-indigo-500      hover:border-transparent focus:outline-none  focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            type="submit"
            // onClick={() => setPage((prev) => prev + 1)}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExmPg2;
