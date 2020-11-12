import './App.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Main from './Main';
import Info from './Info';
import Footer from './Footer';
import Background from './Background';
import Blur from './Blur';
import backgroundBlur from '../images/background-blur.jpg';

function App() {
  const [isPlayerExtend, setPlayerState] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const isLandscape = useMediaQuery({ query: '(orientation:landscape) and (max-height: 600px)' });
  const onPlayerExtend = () => {
    setPlayerState(!isPlayerExtend);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Main
          onPlayerExtend={onPlayerExtend}
          isPlayerExtend={isPlayerExtend}
          isLandscape={isLandscape}
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
        />
        <Blur
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
          isLandscape={isLandscape}
        />
      </div>
    </div>
  );
}

export default App;
