import React, { useState } from "react";
import Ship from "../assest/Ship1.png";
const Hero = () => {
  const [active, setactive] = useState(0);
  const navChange = () => {
    if (window.scrollY >= 0) {
      setactive(window.scrollY);
    } else if (window.scrollY >= 500) {
      setactive(0);
    } else {
      setactive(0);
    }
  };
  window.addEventListener("scroll", navChange);
  return (
    <section className="bg-black py-16 md:pt-48 md:pb-24">
      <div className="w-10/12 mx-auto">
        {/**Hero Text */}
        <div>
          <h1 className="text-white font-body text-4xl md:text-5xl lg:text-7xl">
            Duo veri eripuit <br /> honestatis
          </h1>
        </div>
        <div className="md:flex">
          <div className="pt-4 md:w-1/3" data-aos="fade-right">
            <p className="text-heroSection font-body">
              Duo stet possim quaerendum eu, cumm in invenire platonem. An
              animal assentior nam, sed qualisque deterruisset eaa
            </p>
          </div>
          <div className="flex items-center justify-between md:justify-around md:w-2/3 md:-mt-16">
            <div>
              {/* Hero Button*/}
              <button
                data-aos="zoom-in"
                className="px-6 md:px-12 py-1.5 hidden md:py-3 text-greenButon border-2 border-greenButon bg-transparent  font-body  transition duration-200 ease-in  hover:bg-greenButon hover:text-black "
              >
                Lorem
              </button>
            </div>
            {/**Hero Image */}
            <div data-aos="fade-up">
              <img
                src={Ship}
                alt=""
                style={{ transform: `translateY(-${active * 0.5}px )` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
