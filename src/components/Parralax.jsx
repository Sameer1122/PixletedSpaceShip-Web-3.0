import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Moon from "../assest/Moon.png";
import { Parallax } from "react-parallax";

import Ship2 from "../assest/Ship3.png";
import Ship3 from "../assest/NAV6.png";
import Ship4 from "../assest/NAV7.png";

const Parralax = (props) => {
  // const handleScroll = () => {
  //   if (window.scrollY >= 3800) {
  //     setoffsetY(window.scrollY - 3800);
  //   }

  //   console.log(offsetY);
  //   if (window.scrollY >= 4000) {
  //     setoffsetY(0);
  //   }
  // };
  // window.addEventListener("scroll", handleScroll);
  // const [active, setactive] = useState(0);
  // const [width, setWidth] = useState(window.innerWidth);

  /* Code For Parralex Effect*/

  // const navChange = () => {
  //   console.log(window.scrollY);
  //   if (width > 1024) {
  //     if (window.scrollY >= 3800) {
  //       setactive(window.scrollY - 3800);
  //     } else if (window.scrollY >= 500) {
  //       setactive(0);
  //     } else {
  //       setactive(0);
  //     }
  //   }
  //   if (width > 768 && width < 1024) {
  //     if (window.scrollY >= 5100) {
  //       setactive(window.scrollY - 5100);
  //     } else if (window.scrollY >= 500) {
  //       setactive(0);
  //     } else {
  //       setactive(0);
  //     }
  //   }
  //   if (width > 640 && width <= 768) {
  //     if (window.scrollY >= 6650) {
  //       setactive(window.scrollY - 6650);
  //     } else if (window.scrollY >= 500) {
  //       setactive(0);
  //     } else {
  //       setactive(0);
  //     }
  //   }
  //   if (width > 0 && width <= 640) {
  //     if (window.scrollY >= 6550) {
  //       setactive(window.scrollY - 6550);
  //     } else if (window.scrollY >= 500) {
  //       setactive(0);
  //     } else {
  //       setactive(0);
  //     }
  //   }
  // };
  // window.addEventListener("scroll", navChange);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  // const rellaxRef = useRef();

  return (
    <section
      className="py-16 relative overflow-hidden bg-greenButon"
      style={{ zIndex: "-2" }}
    >
      {/**Start Of Images */}
      <Parallax
        bgImage="/path/to/another/image"
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                zIndex: "-1",
                position: "fixed",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%) ",
              }}
            >
              {" "}
              <img
                src={Moon}
                style={{
                  height: percentage * 200,
                  width: percentage * 200,
                  transform: `translate(-${percentage * 10}px, -50%)`,
                }}
                className="h-64 w-64 overflow-hidden"
                alt=""
              />
            </div>
            <div
              style={{
                zIndex: "-1",
                position: "fixed",
                top: "80%",
                left: "20%",

                transform: "translate(-50%, -50%)",
              }}
            >
              {" "}
              <img
                src={Ship2}
                className="h-32 w-32 transform rotate-75 "
                alt=""
              />
            </div>
            <div
              style={{
                zIndex: "-1",
                position: "fixed",
                top: "30%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {" "}
              <img
                src={Ship2}
                className="h-32 w-32 transform rotate-230"
                alt=""
              />
            </div>
            <div
              style={{
                zIndex: "-1",
                position: "fixed",
                top: "70%",
                left: "70%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {" "}
              <img
                src={Ship3}
                className="h-32 w-32 transform rotate-250"
                alt=""
              />
            </div>
            <div
              style={{
                zIndex: "-1",
                position: "fixed",
                top: "40%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {" "}
              <img
                src={Ship4}
                className=" h-48 w-48 md:h-64 md:w-64 transform rotate-165"
                alt=""
              />
            </div>
          </div>
        )}
      >
        {/*End Of Imagees */}
        {/* Road Map Start Here */}
        <div className="w-10/12 mx-auto space-y-6 md:space-y-0">
          <h1 className="text-black text-5xl text-center font-body">
            ROAD MAP
          </h1>
          {/* FIrst Road Map Start Here */}
          <div className=" pt-8" data-aos="fade-left" data-aos-delay="200">
            <div className="flex justify-end">
              <div className=" w-2/5 md:w-2/5 ">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Road Map Start Here */}
          <div className="" data-aos="fade-right" data-aos-delay="200">
            <div className="flex justify-start ">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 3rd Road Map Start Here */}
          <div className="" data-aos="fade-left" data-aos-delay="200">
            <div className="flex justify-end">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 4th Road Map Start Here */}
          <div className="" data-aos="fade-right" data-aos-delay="200">
            <div className="flex justify-start">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 5th Road Map Start Here */}
          <div className=" pt-8" data-aos="fade-left" data-aos-delay="200">
            <div className="flex justify-end">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 6th Road Map Start Here */}
          <div className="" data-aos="fade-right" data-aos-delay="200">
            <div className="flex justify-start ">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 7th Road Map Start Here */}
          <div className=" pt-8" data-aos="fade-left" data-aos-delay="200">
            <div className="flex justify-end">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 8th Road Map Start Here */}
          <div className="" data-aos="fade-right" data-aos-delay="200">
            <div className="flex justify-start ">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 9th Road Map Start Here */}
          <div className=" pt-8" data-aos="fade-left" data-aos-delay="200">
            <div className="flex justify-end">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          {/* 10th Road Map Start Here */}
          <div className="" data-aos="fade-right" data-aos-delay="200">
            <div className="flex justify-start ">
              <div className=" w-2/5 md:w-2/5">
                <h1 className="font-body text-xl md:text-3xl">
                  Nemore facilisi mediocrem at duo
                </h1>
                <p className="text-xs text-parralexColor font-body pb-12">
                  Dicat eripuit accumsan ad est. Facer facilisi ius ei, ea has
                  cetero argumentum, vel at fugit temporibus. Deseruisse
                  definitionem his et, an has veri integre abhorreant, nam alii
                  epicurei et.
                </p>
                <div className="flex items-center space-x-4">
                  <p className="font-body ">Learn more</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Parralax;
