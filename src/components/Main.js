import { useState } from 'react';
import './Main.css';
import Header from './Header';
import ProjectLogo from './ProjectLogo';
import Player from './Player/Player';
import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';


function Main () {
  const [isPlayerExtend, setPlayerState] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isWideMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isNarrowDesktop = useMediaQuery({ query: '(max-width: 1024px)' });

  const onPlayerExtend = () => {
    setPlayerState(!isPlayerExtend);
  }

  const AnimatedPlayer = animated(Player);

  const calcDefaultHeight = () => {
    if (isMobile) {
      return '34px';
    } else if (isWideMobile || isNarrowDesktop) {
      return '39px';
    } else {
      return '43px';
    }
  };

  const calcExtendedHeight = () => {
    if (isMobile) {
      return '466px';
    } else if (isWideMobile) {
      return '245px';
    } else if (isNarrowDesktop) {
      return '171px';
    } else {
      return '187px';
    }
  };

  const extendСonfig = useSpring({
    to: { height: isPlayerExtend ? calcExtendedHeight() : calcDefaultHeight() },
    config: { tension: 120, friction: 17 }
  });

  return (
    <section className="main">
      <Header
        isPlayerExtend={isPlayerExtend}
      />
      <ProjectLogo
        isPlayerExtend={isPlayerExtend}
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
