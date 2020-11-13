
import { useSpring, animated, } from 'react-spring';
import { useMediaQuery } from 'react-responsive';
import './Main.css';
import Header from './Header';
import ProjectLogo from './ProjectLogo';
import Player from './Player/Player';

function Main({ onPlayerExtend, isPlayerExtend, isLandscape, isMobile }) {

  const isShortMobile = useMediaQuery({ query: '(max-width: 480px) and (max-height: 550px)' });
  const isTallMobile = useMediaQuery({ query: '(max-width: 480px) and (min-height: 551px)' });
  const isWideMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isNarrowDesktop = useMediaQuery({ query: '(max-width: 1024px)' });
  const AnimatedPlayer = animated(Player);

  const calcDefaultHeight = () => {
    if (isTallMobile || isShortMobile) {
      return '35px';
    } else if (isWideMobile || isNarrowDesktop) {
      return '38px';
    } else {
      return '42px';
    }
  };

  const calcExtendedHeight = () => {
    if (isTallMobile) {
      return '466px';
    } else if (isShortMobile) {
      return '380px';
    } else if (isWideMobile) {
      return '220px';
    } else if (isNarrowDesktop) {
      return '170px';
    } else {
      return '186px';
    }
  };

  const extendСonfig = useSpring({
    to: { height: isPlayerExtend ? calcExtendedHeight() : calcDefaultHeight() },
    config: { mass: 1, tension: isMobile ? 110 : 120, friction: 17 }
  });

  return (
    <section className="main">
      <Header
        isPlayerExtend={isPlayerExtend}
        isMobile={isMobile}
        isLandscape={isLandscape}
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
      />
    </section>
  )
}

export default Main;
