import './Header.css';
import './Blur.css';

import cn from 'classnames';

import StreamServices from './StreamServices';
import MarshakLink from './MarshakLink';

function Header({ isPlayerExtend, isMobile, isLandscape }) {
  const headerStyle = cn("header", { "blur": isPlayerExtend && (isMobile || isLandscape) });

  return (
    <header className={headerStyle}>
      <MarshakLink
        className="header__logo"
      />

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
