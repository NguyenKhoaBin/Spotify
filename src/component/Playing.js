import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { songs } from "../context/songContext";

const Playing = () => {
  const { currentSong, handleSetCurrentSong, datasongs, handleSetOnPlay } =
    useContext(songs);
  const maxId = datasongs.length - 1;
  const handleClickNext = () => {
    const song = datasongs.find(
      (song) => song.id === (currentSong.id < maxId ? currentSong.id + 1 : 0)
    );
    handleSetCurrentSong(song);
  };

  const handleClickPre = () => {
    const song = datasongs.find(
      (song) => song.id === (currentSong.id > 0 ? currentSong.id - 1 : maxId)
    );
    handleSetCurrentSong(song);
  };

  return (
    <AudioPlayer
      autoPlay
      layout="stacked-reverse"
      className="!bg-[#111827] md:h-[6rem] h-[9rem] "
      src={currentSong.url}
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPre}
      onEnded={handleClickNext}
      onPlaying={(e) => handleSetOnPlay(e.type === "playing")}
      onPause={(e) => handleSetOnPlay(e.type === "playing")}
    />
  );
};

export default Playing;
