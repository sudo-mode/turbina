import './Header.css';
import logoHeader from '../images/marshak-logo.png';
import ServiceLinks from './ServiceLinks';
import React from 'react';
import { useMediaQuery } from 'react-responsive'

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  const [isLinksHidden, setIsLinksHidden] = React.useState(true);

  return (
    <header className="header">
      <a
        className="marshak-link header__logo"
        href="https://marshakbooks.ru/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="marshak-logo" src={logoHeader} alt="Логотип книжного магазина Маршак" />
      </a>

      <div className="stream-services header__links">
        {isMobile && (
          <button
            className={`stream-services__button ${isLinksHidden ? "" : "stream-services__button_minimised"}`}
            type="button"
            onClick={() => setIsLinksHidden(!isLinksHidden)}
          >
            {isLinksHidden ? "Стриминги" : ""}
          </button>
        )}
        {(!isMobile || !isLinksHidden) && <ServiceLinks />}
      </div>
    </header>
  );
}

export default Header;
