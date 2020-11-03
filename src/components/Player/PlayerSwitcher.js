import './PlayerSwitcher.css';

function PlayerSwitcher ({ onClick, isTextInfo  }) {

  

  console.log('PlayerSwitcher handlePlayerSwitcherClick', onClick)
  return (   
    <button onClick={ onClick } className="player__switcher">
      {isTextInfo ? 'Релизы' : 'Текст песни'}
    </button>
  )
}

export default PlayerSwitcher;
