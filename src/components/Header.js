import './Header.css';
import './Blur.css';

import cn from 'classnames';

import StreamServices from './StreamServices';
import MarshakLink from './MarshakLink';

function Header({ isPlayerExtend, isMobile, isLandscape }) {
  return (
    <header
      className={cn("header", {
        "blur": isPlayerExtend && (isMobile || isLandscape),
      })}
    >
      <MarshakLink className="header__logo" />

      <StreamServices
        className="header__links"
        isPlayerExtend={isPlayerExtend}
        isMobile={isMobile}
        isLandscape={isLandscape}
      />
    </header>
  );
}

export default Header;
