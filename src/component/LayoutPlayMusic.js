import React, { useContext } from "react";
import { songs } from "../context/songContext";
import DetailMusic from "./DetailMusic";
import ListMusic from "./ListMusic";

const LayoutPlayMusic = () => {
  const { showListMb } = useContext(songs);
  return (
    <div
      className={`grid-cols-3 overflow-hidden md:grid h-playerMb lg:h-player ${
        showListMb ? "hidden" : ""
      }`}
    >
      <DetailMusic></DetailMusic>
      <ListMusic></ListMusic>
    </div>
  );
};

export default LayoutPlayMusic;
