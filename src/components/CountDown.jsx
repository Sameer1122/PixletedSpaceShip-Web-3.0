import React, { useEffect, useRef, useState } from "react";
import Mint from "./Mint.jsx";

const CountDown = () => {
  const [days, setdays] = useState("00");
  const [hours, sethours] = useState("00");
  const [minutes, setminutes] = useState("00");
  const [second, setsecond] = useState("00");
  const [end, setend] = useState(true);

  let intervel = useRef();
  const startTimer = () => {
    // Count Down Time Will be set Here
    const countDownDate = new Date(" Nov 04 2021 06:10:00").getTime();
    intervel = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervel.current);
        setend(true);
      } else {
        setdays(days);
        sethours(hours);
        setminutes(minutes);
        setsecond(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervel.current);
    };
  }, []);
  return (
    <>
      {end ? (
        <Mint />
      ) : (
        <section className="bg-countDownRed py-8">
          <div className="w-10/12 mx-auto">
            <h1 className="text-white font-body font-thin text-center text-4xl md:text-6xl">
              PRESALE
            </h1>
            <p className="text-white font-body font-sm text-center md:w-2/3 py-4 mx-auto">
              Mazim nemore singulis an ius, nullam ornatus name ei. Idque
              maiestatis vis ut. i invenire intellegam
            </p>
            {/**TIme Will be Show here in this DIv */}
            <div className="flex items-center justify-between md:w-4/5 mx-auto py-8">
              <div className="text-center">
                <div className="font-body font-bold text-white text-5xl">
                  {days}
                </div>
                <p className="text-white font-body text-xs">Days</p>
              </div>
              <div className="text-center">
                <div className="font-body font-bold text-white text-5xl">
                  {hours}
                </div>
                <p className="text-white font-body text-xs">Hours</p>
              </div>
              <div className="text-center">
                <div className="font-body font-bold text-white text-5xl">
                  {minutes}
                </div>
                <p className="text-white font-body text-xs">Min</p>
              </div>
              <div className="text-center">
                <div className="font-body font-bold text-white text-5xl">
                  {second}
                </div>
                <p className="text-white font-body text-xs"> Sec</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CountDown;
