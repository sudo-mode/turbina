import { useState, useEffect } from 'react';

function useAudioPlayer() {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.getElementById('audio');
    console.log(audio)
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', setAudioTime);

    // React state listeners: update DOM on React state changes
    isPlaying ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    } 

    // effect cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    }
  });

  return {
    curTime,
    duration,
    isPlaying,
    setPlaying,
    setClickedTime
  }
}

export default useAudioPlayer;