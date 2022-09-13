import React, { useContext, useEffect, useState } from "react";
import { songs } from "../context/songContext";

const ListSongMobile = () => {
  const {
    currentSong,
    datasongs,
    handleShowListMb,
    handleSetCurrentSong,
    showListMb,
  } = useContext(songs);
  const [idSongActive, setIdSongActive] = useState();
  const handleClickSong = (idSong) => {
    setIdSongActive(idSong);
    const song = datasongs.find((song) => song.id === idSong);
    handleSetCurrentSong(song);
    handleShowListMb(false);
  };
  useEffect(() => {
    setIdSongActive(0);
    const song = datasongs.find((song) => song.id === 0);
    handleSetCurrentSong(song);
    console.log("render");
  }, []);

  useEffect(() => {
    setIdSongActive(currentSong.id);
  }, [currentSong]);

  return (
    <div
      className={`${
        !showListMb ? "hidden" : ""
      } p-0 overflow-x-hidden overflow-y-scroll md:hidden h-player`}
    >
      {datasongs?.map((song, index) => (
        <div
          onClick={() => handleClickSong(song.id)}
          key={index}
          className={`min-h-[85px] text-xl text-slate-600 font-[500] flex items-center justify-start gap-3 px-5 py-3  bg-[#1E293B] w-screen ${
            idSongActive === song.id ? "bg-slate-500" : ""
          }`}
        >
          <img
            src={song.links?.images[0]?.url}
            className="h-[40px] w-[40px] rounded-full"
            alt=""
          />
          <p className="flex-1 ">{song?.name}</p>
          <span>{song?.author}</span>
        </div>
      ))}
    </div>
  );
};

export default ListSongMobile;
