import './Header.css';
import './Blur.css';

import cn from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import StreamServices from './StreamServices';
import Marshak from './Marshak';

function Header({ isPlayerExtend, isMobile, isLandscape, currentTrack }) {
  return (
    <header
      className={cn("header", {
        blur: isPlayerExtend && (isMobile || isLandscape),
      })}
    >
      <Marshak
        className="header__marshak-links"
        isPlayerExtend={isPlayerExtend}
        isMobile={isMobile}
        isLandscape={isLandscape}
      />

      <div className="header__container">
        <div className="header__form-anchor-link-container">
          <AnchorLink
            className="header__form-anchor-link"
            href="#form-participate"
          >
            Хочу свой трек
          </AnchorLink>
        </div>

        <StreamServices
          isPlayerExtend={isPlayerExtend}
          isMobile={isMobile}
          isLandscape={isLandscape}
          currentTrack={currentTrack}
        />
      </div>
    </header>
  );
}

export default Header;
