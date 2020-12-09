
import { useSpring, animated, } from 'react-spring';
import { useMediaQuery } from 'react-responsive';
import './Main.css';
import Header from './Header/Header';
import ProjectLogo from './ProjectLogo';
import Player from './Player/Player';


function Main({ onPlayerExtend, isPlayerExtend, isLandscape, isMobile, onSetCurrentTrack, currentTrack, isVideoModalOpened, onVideoModalOpen }) {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isNarrowDesktop = useMediaQuery({ query: '(max-width: 1024px)' });
  const isShortMobile = useMediaQuery({ query: '(max-width: 480px) and (max-height: 550px)' });
  const isTallMobile = useMediaQuery({ query: '(max-width: 480px) and (min-height: 551px)' });
  const isMobileLandscape = useMediaQuery({ query: '(orientation: landscape) and (max-height: 480px)' });
  const AnimatedPlayer = animated(Player);

  const calcDefaultHeight = () => {
    switch (true) {
      case isMobile:
        return "136px";
      default:
        return "48px";
    }
  };

  const calcExtendedHeight = () => {
    switch (true) {
      case isTallMobile:
        return '584px';
      case isShortMobile:
        return '319px';
      case isMobileLandscape:
        return '198px';
      case isTablet:
        return '270px';
      case isNarrowDesktop:
        return '224px';
      default:
        return '244px';
    }
  };

  const extendСonfig = useSpring({
    to: { height: isPlayerExtend ? calcExtendedHeight() : calcDefaultHeight() },
    config: { mass: 1, tension: isMobile ? 100 : 120, friction: 17 }
  });

  return (
    <section className="main">
      <Header
        isPlayerExtend={isPlayerExtend}
        isMobile={isMobile}
        isLandscape={isLandscape}
        currentTrack={currentTrack}
        onVideoModalOpen={onVideoModalOpen}
      />
      <ProjectLogo
        isPlayerExtend={isPlayerExtend}
        isMobile={isMobile}
        isLandscape={isLandscape}
      />
      <AnimatedPlayer
        isPlayerExtend={isPlayerExtend}
        onPlayerExtend={onPlayerExtend}
        style={extendСonfig}
        currentTrack={currentTrack}
        onSetCurrentTrack={onSetCurrentTrack}
        isVideoModalOpened={isVideoModalOpened}
      />
    </section>
  )
}

export default Main;
