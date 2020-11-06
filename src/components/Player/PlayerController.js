import { useState, useEffect, useRef } from 'react';
import './PlayerController.css';
import playBtn from '../../images/play-icon.svg';
import pauseBtn from '../../images/pause-icon.svg';
import PlayerTrack from './PlayerTrack';

function PlayerController ({ track }) {
  const [isPlaying, setPlayingState] = useState(false);

  const handlePlayClick = () => {
    setPlayingState(!isPlaying);
  }

  // TODO -- можно КАК-ТО использовать для паузы в бегущей строке
  // // Функция задержки
  // const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

  const trackRef = useRef();
  // Добавляем стейт переменную, определяющую необходимость запуска бегущей строки
  const [isMarqueeNeeded, setMarqueeState] = useState(false);
  
  // Обработчик ресайза окна
  const handleResize = () => {
    const trackElement = trackRef.current;
    const trackContainer = trackElement.parentElement;
    const trackElementWidth = trackElement.scrollWidth;
    const trackContainerWidth = trackContainer.clientWidth;
    if (trackElementWidth > trackContainerWidth) {
      setMarqueeState(true);
    } else {
      setMarqueeState(false);
    }
  }

  // Проверяем необходимость запуска бегущей строки при загрузке страницы
  useEffect(handleResize, []);

  // Добавляем слышатели на ресайз окна
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Добавляем стейт переменную для хранения текущего номера таймера
  const [intervalId, setIntervalId] = useState(null);

  // При изменении isMarqueeNeeded запускаем или останавливаем бегущую строку
  useEffect(() => {
    const trackElement = trackRef.current;
    const trackContainer = trackElement.parentElement;
    const trackElementWidth = trackElement.scrollWidth;
    const trackContainerWidth = trackContainer.clientWidth;

    const startMarquee = () => {
      // TODO -- пауза
      currentX--;
      trackElement.style.left = `${currentX}px`;
      if (currentX === -trackElementWidth) {
        // 10 здесь устанавливает "задержку" в пикселях переде появлением строки справа
        currentX = trackContainerWidth + 10;
      }
    }

    let currentX = 0;
   
    if (isMarqueeNeeded) {
      trackContainer.classList.add('player__song-container_masked');
      const currentIntervalId = setInterval(startMarquee, 10);
      setIntervalId(currentIntervalId)
    } else {
      trackContainer.classList.remove('player__song-container_masked');
      clearInterval(intervalId);
      trackElement.style.left = '0px';
    }
  }, [isMarqueeNeeded])


  // const audio = new Audio(track.link);

  // console.dir(audio);
  const timeline = useRef();
  // console.log(timeline.current);

  return (
    <>
      {/* <audio>
        <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"  type="audio/mp3" />
      </audio> */}
      <div className="player__controller">
        <button
          className="player__control-btn"
          type="button"
          onClick={handlePlayClick}
          style={{ backgroundImage: `url(${isPlaying ? pauseBtn : playBtn})` }}
        />
        <div  className="player__song-container" >
          <p 
            className="player__song"
            ref={trackRef}
          >
            {`${track.trackName} — ${track.group} feat. ${track.author}`}
          </p>
            {/* <PlayerTrack
              
              track={track}  
              isLoading={true}
            /> */}


        </div>
        <span className="player__timer">
          0:24
        </span>
        <div className="player__timeline" ref={timeline}>
          <div className="player__progress" />
        </div>
      </div>
    </>
  )
}

export default PlayerController;
