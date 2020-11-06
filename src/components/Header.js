import './Header.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import StreamServiceLink from './StreamServiceLink';
import logoHeader from '../images/marshak-logo.png';
import { marshakLink, serviceLinks } from '../db/links';

function Header() {
  const [isLinksHidden, setIsLinksHidden] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  
  const handleServiceButtonClick = () => {
    setIsLinksHidden(!isLinksHidden);
  };

  return (
    <header className="header">
      <a
        className="marshak-link header__logo"
        href={marshakLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="marshak-logo"
          src={logoHeader}
          alt="Логотип книжного магазина Маршак"
        />
      </a>

      <div className="stream-services header__links">
        {isMobile && (
          <button
            className={cn('stream-services__button', {
              "stream-services__button_minimised": !isLinksHidden
            })}
            type="button"
            onClick={handleServiceButtonClick}
          >
            {isLinksHidden && "Стриминги"}
          </button>
        )}

        {(!isMobile || !isLinksHidden) && (
          <ul className="stream-services__links">
            {serviceLinks.map((item, i) => (
              <StreamServiceLink {...item} key={i} />
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
