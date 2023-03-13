import React, { useState } from "react";

import "../Style/Toggle.css";

const Toggle = () => {
  const [onToggle, setOnToggle] = useState(false);

  const handleCheck = (e) => {
    setOnToggle(e.target.value);
  };
  return (
    <div>
      <div className="main-switch">
        <input
          className=" absolute -z-10 opacity-0"
          type="checkbox"
          id="checkbox"
          value={onToggle}
          onChange={handleCheck}
        />
        <label
          className=" w-10 h-4 bg-neutral-900 inline-block rounded-full cursor-pointer"
          htmlFor="checkbox"
        ></label>
      </div>
    </div>
  );
};

export default Toggle;
