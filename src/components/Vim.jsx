import React from "react";
import Ship from "../assest/Ship1.png";
import Ship1 from "../assest/NAV9.png";
import Ship2 from "../assest/Ship3.png";
import Ship3 from "../assest/NAV6.png";
import Ship4 from "../assest/NAV7.png";
import Ship5 from "../assest/NAV5.png";

const Vim = () => {
  return (
    <section className="bg-black py-16 ">
      <div className="w-10/12 mx-auto">
        <h6 className="font-body text-cardSecton text-xs">AUDIAM</h6>
        <div className="flex flex-col md:flex-row md:space-x-32">
          {/* LEFT SECTION*/}
          <div className="md:w-1/3 space-y-6 pb-12 md:pb-0">
            <div>
              <h1 className="font-body font-bold text-3xl text-white">
                Vim Illum
              </h1>
            </div>
            <div>
              <p className="font-body text-sm text-white text-justify lg:w-11/12 ">
                Unum porro audiam at vel, eu nam primis regione. Vix ad everti
                diceret, ei omnium regione admodum sit. <br />
                <br /> Mea an decore veritus probatus. Nec ea affert verterem.
                Vix probo semper et, mea simul graeco.
              </p>
            </div>

            <div>
              <button className="bg-black border-2 font-body border-greenButon text-greenButon px-6 py-3 transition duration-200 hover:bg-greenButon hover:text-black">
                {" "}
                lorem Ipsum
              </button>
            </div>
          </div>
          {/* Ship Section*/}
          <div className="flex-col md:w-1/3 space-y-16 pb-12 md:pb-0 ">
            {/* First Ship*/}
            <div className="flex space-x-4">
              <img src={Ship} alt="" className="h-16 w-16" />
              <div className="w-4/5">
                <h1 className="text-white font-body"> Dicat eripuit</h1>
                <p className="text-gray-400 font-body text-xs lg:w-10/12">
                  Molestiae ne, esse vulputate definitiones ut est fastidii
                </p>
              </div>
            </div>
            {/* 2nd Ship*/}
            <div className="flex space-x-4">
              <img src={Ship1} alt="" className="h-16 w-16" />
              <div className="w-4/5">
                <h1 className="text-white font-body">Ferri aperiri</h1>
                <p className="text-gray-400 font-body text-xs lg:w-10/12">
                  Nec wisi assum novum eu. At sea dolorum constituto, ad solet
                </p>
              </div>
            </div>
            {/* 3rd Ship*/}
            <div className="flex space-x-4">
              <img src={Ship2} alt="" className="h-16 w-16" />
              <div>
                <h1 className="text-white font-body">Qui no stet</h1>
                <p className="text-gray-400 font-body text-xs lg:w-10/12">
                  Ei mei fabellas gubergren, ius nostro senserit adversarium
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col md:w-1/3 space-y-16">
            {/* 4th Ship*/}
            <div className="flex space-x-4">
              <img src={Ship3} alt="" className="h-16 w-16" />
              <div>
                <h1 className="text-white font-body">Nemore facilisi </h1>
                <p className="text-gray-400 font-body text-xs lg:w-10/12">
                  Erroribus vituperatoribus no eos, no nobis alienum per dolor
                </p>
              </div>
            </div>
            {/* 5th Ship*/}
            <div className="flex space-x-4">
              <img src={Ship4} alt="" className="h-16 w-16" />
              <div>
                <h1 className="text-white font-body">Essent ornatus</h1>
                <p className="text-gray-400 font-body text-xs lg:w-10/12">
                  Exerci dissentiet comprehensam eum ne quo in tacimates
                </p>
              </div>
            </div>
            {/* 6th Ship*/}
            <div className="flex space-x-4">
              <img src={Ship5} alt="" className="h-16 w-16" />
              <div>
                <h1 className="text-white font-body">Qualisque</h1>
                <p className="text-gray-400 font-body text-xs lg:w-10/12">
                  Vix dicam dolore cu mel erat timeam scriptorem an
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vim;
