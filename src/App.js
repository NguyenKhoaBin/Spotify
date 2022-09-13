import Header from "./component/Header";
import LayoutPlayMusic from "./component/LayoutPlayMusic";
import { songs } from "./context/songContext";
import datasongs from "./datasongs/songs.json";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
import Playing from "./component/Playing";
import ListSongMobile from "./component/ListSongMobile";

function App() {
  document.title = "Spotify";
  const [currentSong, setCurrentSong] = useState({});
  const [play, setPlay] = useState(false);
  const [showListMb, setShowListMb] = useState(false);

  const handleShowListMb = (song) => {
    setShowListMb(!showListMb);
  };
  const handleSetCurrentSong = (song) => {
    setCurrentSong(song);
  };
  const handleSetOnPlay = (isPlaying) => {
    setPlay(isPlaying);
  };
  return (
    <div className="">
      <songs.Provider
        value={{
          datasongs,
          currentSong,
          play,
          showListMb,
          handleSetOnPlay,
          handleSetCurrentSong,
          handleShowListMb,
        }}
      >
        <Header></Header>
        <LayoutPlayMusic></LayoutPlayMusic>
        <ListSongMobile></ListSongMobile>
        <Playing></Playing>
      </songs.Provider>
    </div>
  );
}

export default App;
