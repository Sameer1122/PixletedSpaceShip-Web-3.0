import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const AfterCard = () => {
  return (
    <section className="bg-greenButon">
      <div>
        <h1 className="text-black font-body text-center text-4xl">
          Vivendo omnesque
        </h1>
        <p className="text-black font-body text-center text-sm w-4/5 md:w-1/4 mx-auto py-4">
          Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea
          nam, a
        </p>
        {/**Three Card Starts Here*/}
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 md:w-10/12 mx-auto">
          {/**1st Card */}
          <div className="bg-white pt-48 space-y-6 pl-8 pb-8 w-10/12 mx-auto md:w-full ">
            <img src="" alt="" />
            <h1 className="font-body font-bold text-2xl">Quidam officiis</h1>
            <p className="font-body font-bold text-sm text-afterCard border-b border-afterCardBorder pb-4">
              Pro ad ubique erroribus, in modo mutat sed. Susipit, natum animal
              qui et.
            </p>
            <div className="flex  space-x-4">
              <p className="font-body text-sm">Learn more</p>
              <IoIosArrowForward />
            </div>
          </div>
          {/**2nd Card */}
          <div className="bg-white pt-48 space-y-6 pl-8 pb-8  w-10/12 mx-auto md:w-full">
            <img src="" alt="" />
            <h1 className="font-body font-bold text-2xl">Mazim nemore</h1>
            <p className="font-body font-bold text-sm text-afterCard border-b border-afterCardBorder pb-4">
              An mel everti invenire intellegam, legendos consequuntur eu sit.
            </p>
            <div className="flex space-x-4">
              <p className="font-body text-sm ">Learn more</p>
              <IoIosArrowForward />
            </div>
          </div>
          {/**3rd Card*/}
          <div className="bg-white pt-48 space-y-6 pl-8 pb-8  w-10/12 mx-auto md:w-full">
            <img src="" alt="" />
            <h1 className="font-body font-bold text-2xl"> Idque maiestatis</h1>
            <p className="font-body font-bold text-sm text-afterCard border-b border-afterCardBorder pb-4">
              Diam facillsi insolens per cu, eos malorum voluptaria el.
            </p>
            <div className="flex space-x-4">
              <p className="font-body text-sm ">Learn more</p>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterCard;
