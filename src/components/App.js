import './App.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Main from './Main';
import Info from './Info';
import Footer from './Footer';
import Background from './Background';
import Blur from './Blur';

function App() {
  const [isPlayerExtend, setPlayerState] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const onPlayerExtend = () => {
    setPlayerState(!isPlayerExtend);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Main
          onPlayerExtend={onPlayerExtend}
          isPlayerExtend={isPlayerExtend}
        />
        <Info />
        <Footer
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
        />
        <Background
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
        />
        <Blur
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

export default App;
