import { useState, useEffect } from 'react';

/*
Хук useAudioPlayer для использования аудиоплеера.
audioElementId -- (строка, например 'audio')
track -- трек из списка песен, устанавливается в качестве зависимости 
        (useEffect при смене трека)
*/
function useAudioPlayer(audioPlayerRef, track) {
  const [isLoaded, setLoadedState] = useState(false);

  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  const handlePlayClick = () => {
    setPlaying(!isPlaying);
    isPlaying ? audioPlayerRef.current.pause() : audioPlayerRef.current.play();
  }

  const setAudioData = () => {
    setDuration(audioPlayerRef.current.duration);
    setCurTime(audioPlayerRef.current.currentTime);
    setLoadedState(true);
  }

  const setAudioTime = () => setCurTime(audioPlayerRef.current.currentTime);
  
  useEffect(() => {
    if (clickedTime && clickedTime !== curTime) {
      audioPlayerRef.current.currentTime = clickedTime;
      setClickedTime(null);
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedTime]);

  useEffect(() => {
    setCurTime(0);
    setLoadedState(false);
    setPlaying(false);
  }, [track]);

  return {
    isPlaying,
    handlePlayClick,
    isLoaded,
    setAudioTime,
    setAudioData,
    setClickedTime,
    curTime,
    duration
  }
}

export default useAudioPlayer;
