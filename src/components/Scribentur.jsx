import React from "react";
import Ship from "../assest/Ship1.png";

const Scribentur = () => {
  return (
    <section className="bg-black py-16 ">
      <div className="w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between md:space-x-8 lg:space-x-0">
        <div className="flex items-center justifiy-center mx-auto">
          <img
            src={Ship}
            className="w-72 h-72 md:w-48 md:h-48 lg:w-72 lg:h-72"
            alt=""
          />
        </div>
        <div className="space-y-6 pb-16 md:pb-0">
          <h6 className="font-body font-light text-white text-sm">ANCILLAE</h6>
          <h1 className="font-body text-4xl font-bold text-white pb-4 ">
            {" "}
            Scribentur
          </h1>
          <input
            type="text"
            className="md:pr-36 pl-4 font-body py-2 "
            placeholder="Email"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="message"
            className="md:pr-36 pl-4 font-body py-2  pb-12"
          />
          <br />
          <button className="bg-greenButon font-body px-12 py-3 text-sm transition  duration-200 hover:bg-transparent hover:text-greenButon border-2 border-greenButon hover:border-greenButon ">
            Enter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scribentur;
