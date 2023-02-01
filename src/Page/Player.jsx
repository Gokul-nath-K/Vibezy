import React, { useRef, useState, useEffect, useContext } from "react";
import "../App.css";
import MusicControlBar from "../components/MusicControlBar";
import { SongData } from "../Data/Songs";
import { songs } from "../Data/userContext";
import mediator from "./mediator";

const Player = () => {
  // const [song, setSong] = useState(SongData);
  const { song, setsong } = useContext(songs);
  const [value, setValue] = useState(0);
  const { isPlaying, setisPlaying } = useContext(useContext);
  // const [loopActive, setloopActive] = useState(false);
  // const [currentSong, setcurrentSong] = useState(SongData[0]);
  const { currentsong, setcurrentsong } = useContext(songContext);
  // const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  const onplaying = () => {
    const duration = audioElement.current.duration;
    const cur_time = audioElement.current.currentTime;

    setcurrentsong({
      ...currentsong,
      progress: (cur_time / duration) * 100,
      length: duration,
    });
    setValue(`${currentsong.progress}`);
  };
  const audioElement = useRef();

  return (
    <>
      <audio
        src={require("../Songs/" + currentsong.musicName)}
        ref={audioElement}
        onTimeUpdate={onplaying}
        {...(loopActive ? "loop" : "")}
      />
      <MusicControlBar
        song={song}
        setSong={setsong}
        isPlaying={isPlaying}
        setisplaying={setisPlaying}
        audioElement={audioElement}
        currentSong={currentsong}
        setcurrentSong={setcurrentsong}
        value={value}
      />
    </>
  );
};

export default Player;
