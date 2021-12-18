import React from "react";
import Ship from "../assest/Ship1.png";
const Card = () => {
  return (
    <section className="bg-greenButon py-4">
      <div className="w-10/12 mx-auto bg-white py-16 -mt-36 md:-mt-96">
        <div className="flex justify-between w-4/5 mx-auto">
          <div className="space-y-8">
            <p className="font-body text-xs text-cardSecton">Commune</p>
            <h1 className="font-body font-bold text-xl md:text-5xl">
              Ei mei faballes gubergren
            </h1>
            {/**Card Button */}
            <button className="bg-black px-10 py-4 text-white font-body text-sm transition duration-200 hover:bg-greenButon hover:text-black">
              {" "}
              Lorem
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

export default Card;
