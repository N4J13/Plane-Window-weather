"use client";

import React from "react";

const Arch = () => {
  const [progress, setProgress] = React.useState(45);
  const [temperature, setTemperature] = React.useState(16);
  React.useEffect(() => {
    function calculateRotation(progress: number) {
      return 45 + progress * (180 / 50);
    }
    setProgress(calculateRotation(temperature));
  }, [temperature]);

  return (
    <div className=" w-48 h-24 overflow-hidden  ">
      <div className="relative w-48 h-48">
        <div
          style={{
            transform: `rotate(${progress}deg)`,
          }}
          className={`absolute left-0 top-0 w-48 h-48 rotate-45 duration-300  rounded-[50%] border-box  border-[6px] border-white/5  border-b-white/80 border-r-white/80`}
        ></div>
        <div className="absolute left-1/2 top-12 -translate-x-1/2 text-white/80 text-xl font-semibold ">
          {temperature} °C
        </div>
      </div>
    </div>
  );
};

export default Arch;
