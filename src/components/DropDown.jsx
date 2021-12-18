import React from "react";

const DropDown = (props) => {
  return (
    <div className="md:hidden grid grid-rows-4 bg-gray-900  items-center text-center text-white py-4">
      <div
        className="border-b border-mediWhite font-body w-1/3 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110
      "
      >
        Home
      </div>
      <div
        className="border-b border-mediWhite font-body w-1/3 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110
      "
      >
        Services
      </div>
      <div
        className="border-b border-mediWhite font-body w-1/3 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110
      "
      >
        About us
      </div>
      <div className="font-body w-1/3 mx-auto p-4 transition duration-300 ease-in transform  hover:scale-y-110">
        Sign Up
      </div>
      <button
        onClick={props.walletHandler}
        className="bg-black border-2 w-2/4 mx-auto font-xs font-body border-greenButon text-greenButon px-3 py-3 transition duration-200 hover:bg-greenButon hover:text-black"
      >
        {" "}
        {props.clicked ? "269***10" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default DropDown;
