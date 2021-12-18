import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";

const Progress = () => {
  const [active, setactive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const navChange = () => {
    // Automatic Animation on Responsive Screen
    if (width > 1024) {
      if (window.scrollY >= 2900) {
        setactive(true);
      } else {
        setactive(false);
      }
    }
    if (width > 768 && width < 1024) {
      if (window.scrollY >= 3850) {
        setactive(true);
      } else {
        setactive(false);
      }
    }
    if (width > 640 && width <= 768) {
      if (window.scrollY >= 4750) {
        setactive(true);
      } else {
        setactive(false);
      }
    }
    if (width > 0 && width <= 640) {
      if (window.scrollY >= 4350) {
        setactive(true);
      } else {
        setactive(false);
      }
    }
  };
  window.addEventListener("scroll", navChange);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className="bg-black py-16 ">
        {active && (
          <div className="w-10/12 mx-auto flex flex-col  sm:flex-row space-y-8 sm:space-y-0 sm:space-x-32">
            {/**LEft Section */}
            <div className="sm:w-1/2 space-y-6">
              <h6 className="font-body text-xs text-white">NOLUISSE</h6>
              <h1 className="font-body text-4xl text-white">
                Ust <br /> copn porin
              </h1>
              {/**1st Bar */}
              <div className="skills">
                <div className="details flex justify-between">
                  <span className="text-white font-body text-xs">Epicuri</span>
                  <span className="text-white font-body text-xs">85%</span>
                </div>
                <div className="bar bg-barBackground">
                  <div
                    id="css-bar"
                    style={{ backgroundColor: "#ffff00" }}
                  ></div>
                </div>
              </div>
              {/**2nd Bar */}
              <div className="skills">
                <div className="details flex justify-between">
                  <span className="text-white font-body text-xs">Detracto</span>
                  <span className="text-white font-body text-xs">73%</span>
                </div>
                <div className="bar  bg-barBackground">
                  <div
                    id="javascript-bar"
                    style={{ backgroundColor: "#ff0500" }}
                  ></div>
                </div>
              </div>
              {/**3rd Bar */}
              <div className="skills">
                <div className="details flex justify-between">
                  <span className="text-white font-body text-xs">Fierent</span>
                  <span className="text-white font-body text-xs">42%</span>
                </div>
                <div className="bar  bg-barBackground">
                  <div
                    id="jQuery-bar"
                    style={{ backgroundColor: "#0067ff" }}
                  ></div>
                </div>
              </div>
            </div>
            {/**Right Section */}
            <div className="sm:w-1/2 space-y-6">
              <h6 className="font-body text-xs text-white">NOLUISSE</h6>
              <h1 className="font-body text-4xl text-white">
                Usu <br /> vocent copi
              </h1>
              {/**1st Bar */}
              <div className="skills">
                <div className="details flex justify-between">
                  <span className="text-white font-body text-xs">Epicuri</span>
                  <span className="text-white font-body text-xs">85%</span>
                </div>
                <div className="bar  bg-barBackground">
                  <div
                    id="css-bar"
                    style={{ backgroundColor: "#ffff00" }}
                  ></div>
                </div>
              </div>
              {/**2nd Bar */}
              <div className="skills">
                <div className="details flex justify-between">
                  <span className="text-white font-body text-xs">Detracto</span>
                  <span className="text-white font-body text-xs">73%</span>
                </div>
                <div className="bar  bg-barBackground">
                  <div
                    id="javascript-bar"
                    style={{ backgroundColor: "#ff0500" }}
                  ></div>
                </div>
              </div>
              {/**3rd Bar */}
              <div className="skills">
                <div className="details flex justify-between ">
                  <span className="text-white font-body text-xs">Fierent</span>
                  <span className="text-white font-body text-xs">42%</span>
                </div>
                <div className="bar  bg-barBackground">
                  <div
                    id="jQuery-bar"
                    style={{ backgroundColor: "#0067ff" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Progress;
