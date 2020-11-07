import { useState, useEffect } from 'react';

/*
Хук useAudioPlayer для использования аудиоплеера.
audioElementId -- (строка, например 'audio')
*/
function useAudioPlayer(audioElementId) {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const audio = document.getElementById(audioElementId);
    // Обёртка для стейт-сеттеров
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);

    // Установка DOM listeners: обновление React state по событиям DOM
    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', setAudioTime);

    // React state listeners: обновление DOM поизменению React state 
    isPlaying ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    } 

    // Снятие слушателей
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
