import React, { useContext } from "react";
import { songs } from "../context/songContext";

const DetailMusic = () => {
  const { currentSong, play } = useContext(songs);
  return (
    <div className="p-3 bg-[#334155]  lg:col-span-1 h-full">
      <h3 className="text-[#8396ef] text-xl font-[500]">
        {currentSong?.author}
      </h3>
      <h2 className="text-[#869BA3] text-2xl font-[400]">
        {currentSong?.name}
      </h2>
      <div className="py-[45px] relative">
        <img
          src={currentSong?.links?.images[0]?.url}
          className={` h-[325px] w-[325px] mx-auto rounded-full  ${
            play ? "animate-pingSlow" : "animate-none"
          } `}
          alt=""
        />
        <div className="absolute w-[50px] h-[50px] bg-[#e7dede] rounded-full top-2/4 right-2/4 translate-x-[50%] -translate-y-[50%]"></div>
      </div>
    </div>
  );
};

export default DetailMusic;
