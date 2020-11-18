import './PlayerSwitcher.css';
import { useState, useEffect } from 'react';

function PlayerSwitcher ({ onClick, isTextInfo  }) {

  const [switcherStyle, setContentStyle] = useState('player__switcher-text');

  const setChangeStyle = () => {
    setContentStyle('player__switcher-text');
    setTimeout(() => {  
      setContentStyle('player__switcher-text player__switcher-text_loaded');
    }, 100)
  }

  useEffect(() => {
    setChangeStyle();
  }, [isTextInfo])

  return (   
    <button onClick={ onClick } className='player__switcher'>
      <p className={switcherStyle}>{isTextInfo ? 'Релизы' : 'Текст песни'}</p>
    </button>
  )
}

export default PlayerSwitcher;
