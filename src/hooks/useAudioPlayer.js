import { useState, useEffect } from 'react';

/*
Хук useAudioPlayer для использования аудиоплеера.
audioElementId -- (строка, например 'audio')
track -- трек из списка песен, устанавливается в качестве зависимости 
        (useEffect при смене трека)
onTrackEnd -- обработчик конца трека
*/
function useAudioPlayer(audioPlayerRef, track, onTrackEnd) {
  const [isLoaded, setLoadedState] = useState(false);

  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  const handlePlayClick = () => {
    setPlaying(!isPlaying);
    !isPlaying
      ? audioPlayerRef.current.play()
      : audioPlayerRef.current.pause();
  }
      
  const handleLoadedMetaData = () => {
    setDuration(audioPlayerRef.current.duration);
    setCurTime(audioPlayerRef.current.currentTime);
    setLoadedState(true);
  }
  
  useEffect(() => {
    isPlaying
      ? audioPlayerRef.current.play().catch(_ => {setPlaying(false)})
      : audioPlayerRef.current.pause();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track, isPlaying]);
  // catch предназначен для отлавливания исключения "play() failed because the user didn't interact
  // with the document first" при загрузке страницы.

  const handleTimeUpdate = () => setCurTime(audioPlayerRef.current.currentTime);

  const handleTrackEnd = () => {
    setDuration(audioPlayerRef.current.duration);
    setCurTime(0);
    const isLastTrack = onTrackEnd();
    if (isLastTrack) {
      setPlaying(false);
    }
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
    setLoadedState(false);
  }, [track]);

  return {
    isPlaying,
    setPlaying,
    handlePlayClick,
    isLoaded,
    handleTimeUpdate,
    handleLoadedMetaData,
    setClickedTime,
    handleTrackEnd,
    curTime,
    duration
  }
}

export default useAudioPlayer;
