import './App.css';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Main from './Main';
import Info from './Info';
import Footer from './Footer';
import Background from './Background';
import Blur from './Blur';
import VideoModal from './VideoModal';
import backgroundBlur from '../images/background-blur.jpg';
import tracks from '../db/tracks';

function App() {
  const [isPlayerExtend, setPlayerState] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isLandscape = useMediaQuery({ query: '(orientation:landscape) and (max-height: 600px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const onPlayerExtend = () => {
    setPlayerState(!isPlayerExtend);
  }
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [playerExtendTimer, setPlayerExtendTimer] = useState(0);
  const [isVideoModalOpened, setIsVideoModalOpened] = useState(false);
  const [videoModalData, setVideoModalData] = useState({
    title: '',
    src: '',
    youtubeId: '',
  });

  // function onSetCurrentTrack(track) {
  //   setCurrentTrack(track);
  // }

  function onVideoModalOpen({ title, src, youtubeId }) {
    setVideoModalData({ title, src, youtubeId });
    setIsVideoModalOpened(true);
    setPlayerState(false);
  }

  function onVideoModalClose() {
    setIsVideoModalOpened(false);
  }

  /* Для десктопов: плеер выезжает через 3 секунды после загрузки страницы.
  Для отключения закомментить этот useEffect и стейт isDesktop */
  useEffect(() => {
    if (isDesktop) {
      setPlayerExtendTimer(
        setTimeout(() => {
          setPlayerState(true);
        }, 3000)
      );
    }
  }, [isDesktop]);

  /* Для десктопов: плеер выезжает через 3 секунды после загрузки страницы.
  Отменяем выезд, если пользователь успел за это время раскрыть и скрыть плеер, либо
  открыть модальное окно с youtube-плеером. 
  Для отключения закомментить этот useEffect и стейт playerExtendTimer */
  useEffect(() => {
    if (playerExtendTimer && (isPlayerExtend || isVideoModalOpened)) {
      clearTimeout(playerExtendTimer);
      setPlayerExtendTimer(0);
    }
  }, [isPlayerExtend, playerExtendTimer, isVideoModalOpened]);

  return (
    <div className="page">
      <div className="page__container">
        <Main
          onPlayerExtend={onPlayerExtend}
          isPlayerExtend={isPlayerExtend}
          isLandscape={isLandscape}
          isMobile={isMobile}
          onSetCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
          isVideoModalOpened={isVideoModalOpened}
          onVideoModalOpen={onVideoModalOpen}
        />
        <Info />
        <Footer
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
        />
        <Background
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
          backgroundBlur={backgroundBlur}
          currentTrack={currentTrack}
        />
        <Blur
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
          isLandscape={isLandscape}
        />
        <VideoModal
          videoModalData={videoModalData}
          isVideoModalOpened={isVideoModalOpened}
          onVideoModalClose={onVideoModalClose}
        />
      </div>
    </div>
  );
}

export default App;
