// WITH A LIBRARY
// "use client"
// import React from 'react'
// import Countdown from 'react-countdown'

// const endingDate = new Date("2023-07-25")

// const CountDown = () => {
//   return (
//     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
//   )
// }

// export default CountDown


// WITHOUT A LIBRARY

"use client"
import React, { useState, useEffect } from "react";

const CountDown = () => {
  let [delay, setDelay] = useState(0);

  useEffect(() => {
    const endDate = new Date(`10/8/2024`);
    setDelay(endDate.getTime() - new Date().getTime());

    const timer = setInterval(() => {
      setDelay(endDate.getTime() - new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let d = Math.floor(delay / (1000 * 60 * 60 * 24));
  let h = Math.floor((delay / (1000 * 60 * 60)) % 24);
  let m = Math.floor((delay / 1000 / 60) % 60);
  let s = Math.floor((delay / 1000) % 60);

  if (delay <= 0) {
    return <span className="font-bold text-5xl text-yellow-300">00:00:00:00</span>;
  }

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d < 10 ? `0${d}` : d}:{h < 10 ? `0${h}` : h}:{m < 10 ? `0${m}` : m}:{s < 10 ? `0${s}` : s}
    </span>
  );
};

export default CountDown;