import './Header.css';
import './Blur.css';

import cn from 'classnames';

import StreamServices from './StreamServices';
import Marshak from './Marshak';

function Header({ isPlayerExtend, isMobile, isLandscape }) {
  return (
    <header
      className={cn("header", {
        "blur": isPlayerExtend && (isMobile || isLandscape),
      })}
    >
      <Marshak 
        className="header__marshak-links" 
        isPlayerExtend={isPlayerExtend}
        isMobile={isMobile}
        isLandscape={isLandscape}
      />

      <div className="header__container">
        <a className="header__form-anchor-link" href="#form-participate">
          Хочу свой трек
        </a>

        <StreamServices
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
          isLandscape={isLandscape}
        />
      </div>
    </header>
  );
}

export default Header;
