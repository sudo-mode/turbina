import './Header.css';
import './Blur.css';

import cn from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import StreamServices from './StreamServices';
import Marshak from './Marshak';
import { liveLink } from '../configs/links';

function Header({ isPlayerExtend, isMobile, isLandscape, currentTrack, onVideoModalOpen }) {
  const handleVideoModalOpen = () => {
    onVideoModalOpen(liveLink);
  };

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

      <div className="header__various-links">
        <div className="header__accent-elements-container">
          <button
            className="header__open-live-button"
            onClick={handleVideoModalOpen}
          >
            Live
          </button>

          <div className="header__form-anchor-link-container">
            <AnchorLink
              className="header__form-anchor-link"
              href="#form-participate"
            >
              Хочу свой трек
            </AnchorLink>
          </div>
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
