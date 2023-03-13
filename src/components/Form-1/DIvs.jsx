import React, { useState } from "react";

import "../../Style/Divs.css";

export const DIvs = () => {
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);

  const handle1 = () => {
    setBorder1((prev) => !prev);
  };
  const handle2 = () => {
    setBorder2((prev) => !prev);
    console.log(border1);
  };
  const handle3 = () => {
    setBorder3((prev) => !prev);
  };

  return (
    <div className=" flex space-x-2">
      <div
        onClick={handle1}
        className={`div1 ${border1 ? "Border div1" : "border"}`}
      >
        This is div-1
      </div>
      <div
        onClick={handle2}
        className={`div1 ${border2 ? "Border " : "border"}`}
      >
        This is div-1
      </div>
      <div
        onClick={handle3}
        className={`div1 ${border3 ? "Border " : "border"}`}
      >
        This is div-1
      </div>
    </div>
  );
};
