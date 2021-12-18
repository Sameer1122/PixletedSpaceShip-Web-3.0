import React, { useState } from "react";

const FaqList = (props) => {
  const [toggle, settoggle] = useState(false);

  const toggleHandler = () => {
    settoggle(!toggle);
  };
  return (
    <>
      {/**Question */}
      <div className="px-4 bg-transparent border-2 border-greenButon md:px-16 lg:px-24 md:py-2 lg:py-4 md:w-11/12 lg:w-10/12">
        <div className="flex  text-white font-body py-2 justify-between lg:px-4">
          <h3>{props.data.qustion}</h3>
          <p
            className="font-body text-xl cursor-pointer transition duration-200 hover:text-gray-500"
            onClick={toggleHandler}
          >
            {toggle ? "x" : "+"}
          </p>
        </div>
      </div>
      {/**Answer */}
      <div className=" md:w-11/12 lg:w-10/12 ">
        {toggle && (
          <p className="transition-all duration-300 ease-in  text-xs text-white font-body mt-4 p-4">
            {props.data.answer}
          </p>
        )}
      </div>
    </>
  );
};

export default FaqList;
