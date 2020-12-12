import './PlayerSwitcher.css';
import cnWithSwitchAnimation from '../../utils/switchAnimation';

function PlayerSwitcher({ onClick, isTextInfo }) {

  return (
    <button onClick={onClick} className='player__switcher'>
      <span className={cnWithSwitchAnimation('player__switcher-text', isTextInfo)}>
        {isTextInfo ? 'Релизы' : 'Текст песни'}
      </span>
    </button>
  )
}

export default PlayerSwitcher;
