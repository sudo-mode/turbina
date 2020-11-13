import { useState, useEffect } from 'react';

/*
Хук useAudioPlayer для использования аудиоплеера.
audioElementId -- (строка, например 'audio')
track -- трек из списка песен, устанавливается в качестве зависимости 
        (useEffect при смене трека)
*/
function useAudioPlayer(audioPlayerRef, track, audioCtx) {
  const [isLoaded, setLoadedState] = useState(false);

  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  const handlePlayClick = () => {

    if (isPlaying) {
      audioPlayerRef.current.pause();
      setPlaying(false)
    } else {
      if (audioCtx) {
        if (audioCtx.state === 'suspended') {
          audioCtx.resume()
        }
      }  
      audioPlayerRef.current.play();
      setPlaying(true);
    }
  }

  const handleLoadedMetaData = () => {
    setDuration(audioPlayerRef.current.duration);
    setCurTime(audioPlayerRef.current.currentTime);
    setLoadedState(true);
  }

  const handleTimeUpdate = () => setCurTime(audioPlayerRef.current.currentTime);

  const handleTrackEnded = () => {
    setDuration(audioPlayerRef.current.duration);
    setCurTime(0);
    handlePlayClick();
  }
  
  useEffect(() => {
    if (clickedTime && clickedTime !== curTime) {
      audioPlayerRef.current.currentTime = clickedTime;
      setClickedTime(null);
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedTime]);

  useEffect(() => {
    setCurTime(0);
    setPlaying(false);
    setLoadedState(false);
  }, [track]);

  return {
    isPlaying,
    handlePlayClick,
    isLoaded,
    handleTimeUpdate,
    handleLoadedMetaData,
    setClickedTime,
    handleTrackEnded,
    curTime,
    duration
  }
}

export default useAudioPlayer;
