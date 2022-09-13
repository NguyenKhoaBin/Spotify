/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { songs } from "../context/songContext";
const ListMusic = () => {
  const { currentSong, datasongs, handleSetCurrentSong } = useContext(songs);
  const [idSongActive, setIdSongActive] = useState();
  const handleClickSong = (idSong) => {
    setIdSongActive(idSong);

    const song = datasongs.find((song) => song.id === idSong);
    handleSetCurrentSong(song);
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
    <div className="relative hidden col-span-2 overflow-y-scroll md:block">
      <table className="w-full">
        <thead className="bg-[#475569] sticky top-0 z-30">
          <tr className="h-[40px] text-white ">
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="text-center w-[20%] ">Author</th>
            <th className="w-[10%]">
              <span>
                <i className="fa-solid fa-download"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody className=" bg-[#1E293B] text-[#5EEAD4]">
          {datasongs.map((song, index) => (
            <tr
              key={index}
              className={`h-[45px] cursor-pointer  hover:bg-[#475569] ${
                idSongActive === song.id ? "bg-slate-500" : ""
              }`}
              onClick={() => handleClickSong(song.id)}
            >
              <td className="text-center w-[10%]">{index + 1}</td>
              <td>{song?.name}</td>
              <td className="w-[20%] text-center">{song?.author}</td>
              <td className="text-center  w-[10%] ">
                <span>
                  <i className="fa-solid fa-download"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListMusic;
