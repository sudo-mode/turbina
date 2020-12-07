import './ExtendBtn.css';
import { useMediaQuery } from 'react-responsive';
import ExtendBtnIcon from '../svg/ExtendRoundIcon';
import CloseBtnIcon from '../svg/CloseRoundIcon';
import ArrowIcon from '../svg/ArrowIcon';

function ExtendBtn ({ isOpen, onBtnClick }) {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)'});
  return (
    <button
      className="extend-btn"
      type="button"
      onClick={onBtnClick}
    >
      {isOpen
        ? isMobile ? <ArrowIcon isRotated={true} /> : <CloseBtnIcon className="extend-btn__close" />
        : isMobile ? <ArrowIcon /> : <ExtendBtnIcon className="extend-btn__open" />
      }
    </button>
  )
}

export default ExtendBtn;
