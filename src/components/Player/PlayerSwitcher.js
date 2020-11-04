import './PlayerSwitcher.css';

function PlayerSwitcher ({ onClick, isTextInfo  }) {

  return (   
    <button onClick={ onClick } className='player__switcher'>
      <p className='player__switcher-text'>{isTextInfo ? 'Релизы' : 'Текст песни'}</p>
    </button>
  )
}

export default PlayerSwitcher;
