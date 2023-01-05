import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import MusicControlBar from "./MusicControlBar";
import {SongData} from '../Data/Songs'
import mediator from "./mediator";

const Player = () => {

  const [song , setSong] = useState(SongData);
  const [value , setValue] = useState(0);
  const [isPlaying, setisplaying] = useState(false);
  const [loopActive, setloopActive] = useState(false);
  const [currentSong, setcurrentSong] = useState(SongData[0]);

  useEffect(() => {
    
    if(isPlaying) {
      audioElement.current.play();
    }
    else {
      audioElement.current.pause();
    }
  }, [isPlaying])
  
  const onplaying = () => {

    const duration = audioElement.current.duration;
    const cur_time = audioElement.current.currentTime;
    
    setcurrentSong({...currentSong, "progress": cur_time / duration * 100, "length": duration});
    setValue(`${currentSong.progress}`);
  }
  const audioElement = useRef();

  return (
    <>
      <audio src={require("../Songs/" + currentSong.musicName)}  ref={audioElement} onTimeUpdate={onplaying} {...loopActive?("loop"):""} />
      <MusicControlBar 
      song={song} 
      setSong={setSong} 
      isPlaying={isPlaying} 
      setisplaying={setisplaying}
      audioElement={audioElement}
      currentSong={currentSong}
      setcurrentSong={setcurrentSong}
      loopActive={loopActive}
      value={value}
      />
      <mediator currentSong={currentSong.title} />
    </>
  );
}

export default Player;
