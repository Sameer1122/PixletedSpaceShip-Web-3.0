import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-greenButon py-16 ">
      <div className="w-10/12 mx-auto">
        <div className="space-y-6">
          <h6 className="font-body font-light  text-sm">MAIESTATIS</h6>
          <h1 className="font-body text-4xl font-bold ">
            {" "}
            Mei ei tollit <br /> epicurei invenire
          </h1>
          <p className="font-bold font-body sm:w-1/3 ">
            Et vim graeco principes. Cu dico nullam pri. Duo stet possim
            quaerendum eu, cum in invenire platonem. An animal assentior nam.
          </p>
          {/**Input and Button */}
          <div className="sm:flex sm:w-1/3 space-y-4 sm:space-y-0 sm:space-x-6">
            <input
              type="text"
              placeholder="Email"
              className="pl-4 py-2 sm:py-0 font-body"
            />
            <button className="text-white font-body px-10 py-6 border-2 border-double border-transparent hover:border-current  select-none hover:border-black hover:bg-transparent hover:text-black bg-black text-xs transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
