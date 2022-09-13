import React, { useContext } from "react";
import { songs } from "../context/songContext";

const Header = () => {
  const { handleShowListMb } = useContext(songs);
  return (
    <div className="h-[6rem] relative bg-[#111827] text-white flex items-center justify-start ">
      <span
        className="p-3 text-3xl text-white cursor-pointer md:hidden"
        onClick={handleShowListMb}
      >
        <i className=" fa-solid fa-bars"></i>
      </span>
      <div className="flex items-center justify-center flex-1 gap-3 pr-7">
        <i className="text-4xl fa-brands fa-spotify"></i>
        <h2 className="text-4xl">Spotify</h2>
      </div>
    </div>
  );
};

export default Header;
