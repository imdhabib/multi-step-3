import React, { useEffect, useState } from "react";
import "../Style/Page1.css";

const PAGE1 = ({ setPage }) => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const { name, email, phone } = user;
  const [validinput, setValidInput] = useState(true);

  const handleChange = (e) => {
    const FildName = e.target.name;
    setUser({ ...user, [FildName]: e.target.value });
  };

  //const phoneRegExp = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    // let user = {
    //   name,
    //   email,
    //   phone,
    // };
    // console.log(user);
  };
  const handleNext = () => {
    // if (name.length < 3 && email.length < 5 && phone.length < 11) {
    //   setValidInput(false);
    //   setPage(1);
    // }
    if (name.length < 3) {
      setValidInput(false);
      setPage(1);
    } else if (email.length < 5) {
      setValidInput(false);
    } else if (phone.length < 11 || phone.length > 11) {
      setValidInput(false);
    } else {
      setValidInput(true);
      setPage((prev) => prev + 1);
    }
    // if (user.name.length < 3) {
    //   setPage(1);
    //   setValidInput(false);
    // } else {
    //   setValidInput(true);
    //   setPage((prev) => prev + 1);
    // }
  };

  useEffect(() => {
    // if (name.length < 3 && email.length < 5 && phone.length < 11) {
    //   // setValidInput(false);
    // }

    // (name.length < 3).validinput ? setValidInput(false) : setValidInput(true);
    // (email.length < 5).validinput ? setValidInput(false) : setValidInput(true);
    // (phone.length < 11).validinput ? setValidInput(false) : setValidInput(true);

    (name.length < 3).validinput && setValidInput(false);
    (email.length < 5).validinput && setValidInput(false);
    (phone.length < 11).validinput && setValidInput(false);

    // if (name.length > 3) {
    //   setValidInput(true);
    // } else if (email.length > 5) {
    //   setValidInput(true);
    // } else if (phone.length < 11) {
    //   setValidInput(false);
    // }
    // else {
    //   setValidInput(true);
    // }

    // if (name.length === 3) {
    //   setValidInput(true);
    // } else if (email.length === 5) {
    //   setValidInput(true);
    // } else if (phone.length < 11) {
    //   setValidInput(true);
    // } else {
    //   setValidInput(false);
    // }
  }, [name, email, phone]);

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
          <form className=" min-w-full space-y-3" onSubmit={handleSubmit}>
            <div className="label flex justify-between">
              <label htmlFor="name">Name</label>
              <p className={`${validinput ? "validError" : "inValidError"}`}>
                Name is required
              </p>
            </div>
            <input
              className=" outline-gray-300 px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              required
              id="name"
              placeholder="e.g. Stephen King"
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <div className="label flex justify-between">
              <label htmlFor="email">Email Address</label>
              <p className={`${validinput ? "validError" : "inValidError"}`}>
                Email is required
              </p>
            </div>
            <input
              className=" outline-gray-300 px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              required
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={handleChange}
            />
            <div className="label flex justify-between">
              <label htmlFor="phone">Phone Number</label>
              <p className={`${validinput ? "validError" : "inValidError"}`}>
                Phone is required
              </p>
            </div>
            <input
              className=" outline-gray-300 px-2 py-2 tracking-wider min-w-full border rounded-md border-gray-200"
              required
              type="phone"
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              value={phone}
              onChange={handleChange}
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
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default PAGE1;
