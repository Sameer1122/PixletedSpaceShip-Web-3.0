import React from "react";
import Ship from "../assest/Ship2.png";
const TwoCards = () => {
  return (
    <section className="bg-greenButon">
      <div className="w-10/12 mx-auto  py-16 flex-col flex lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/**1st Card */}
        <div className="flex justify-between lg:w-3/4 mx-auto bg-white py-16 px-6">
          <div className="space-y-6 lg:pl-16">
            <p className="font-body text-xs text-cardSecton">Erroribus</p>
            <h1 className="font-body font-bold md:text-3xl xl:text-5xl">
              Ei mei faballes gubergren
            </h1>
            <button className="bg-black px-4 py-2 text-white font-body text-sm transition duration-200 transform hover:-translate-y-1 hover:bg-greenButon hover:text-black hover:scale-110">
              {" "}
              +
            </button>
          </div>
          <div>
            <img src={Ship} alt="" />
          </div>
        </div>
        {/**2nd Card */}
        <div className="flex justify-between lg:w-3/4 mx-auto bg-white py-16 px-4">
          <div className="space-y-6 lg:pl-16">
            <p className="font-body text-xs text-cardSecton">Erroribus</p>
            <h1 className="font-body font-bold md:text-3xl xl:text-5xl">
              Ei mei faballes gubergren
            </h1>
            <button className="bg-black px-4 py-2 text-white font-body text-sm transition duration-200 hover:bg-greenButon hover:text-black transform hover:scale-110 hover:-translate-y-1">
              {" "}
              +
            </button>
          </div>
          <div>
            <img src={Ship} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoCards;
