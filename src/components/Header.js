import './Header.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import StreamServiceLink from './StreamServiceLink';
import logoHeader from '../images/marshak-logo.png';
import { marshakLink, serviceLinks } from '../db/links';
import { useTrail, animated } from 'react-spring'

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  /*TODO - дописать комментарий к этим стейтам */
  const [isLinksMounted, setIsLinksMounted] = useState(false);
  const [isLinksHidden, setIsLinksHidden] = useState(true);

  const handleServiceButtonClick = () => {
    setIsLinksHidden(!isLinksHidden);
    setIsLinksMounted(true);
  };

  /* Создаем анимированную компоненту из обычной */
  const AnimatedStreamServiceLink = animated(StreamServiceLink);

  /* Конфиг для анимации ссылок на узких экранах. Меняются прозрачность и смещение по вертикали*/
  const mobileConfig = {
    config: { mass: 1, tension: 120, friction: 14 },
    to: {
      opacity: !isLinksHidden ? 1 : 0,
      y: !isLinksHidden ? 0 : 50
    },
    from: { 
      opacity: 0, 
      y: 50
    },
    reverse: isLinksHidden,
    onRest: () => {
      if (isLinksHidden) {
        setIsLinksMounted(false);
      }
    }
  };

  /* Конфиг для анимации на широком экране. Сейчас там анимация не требуется, и конфиг обеспечивает статичное отображение при загрузке страницы) */
  const desktopConfig = {
    opacity: 1,
    y: 0
  };

  /* Массив с объектами пропсов для анимации каждой ссылки */
  const trail = useTrail(serviceLinks.length, isMobile ? mobileConfig : desktopConfig);

  /* Сборка объектов с полным набором пропсов для будущих анимированных компонент.
  Объединяются пропсы для анимации и обычные пропсы (название и адрес ссылки).
  Объектов в массиве столько, сколько ссылок на стриминговые сервисы. */
  const serviceLinksProps = serviceLinks.map((link, i) => {
    const linkProps = {};
    Object.assign(linkProps, link, trail[i]);
    return linkProps;
  });

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
            className={cn("stream-services__button", {
              "stream-services__button_minimised": !isLinksHidden,
            })}
            type="button"
            onClick={handleServiceButtonClick}
          >
            {isLinksHidden && "Стриминги"}
          </button>
        )}

        {(isLinksMounted || !isMobile) && (
          <ul className="stream-services__links">
            {serviceLinksProps.map((item, i) => (
              <AnimatedStreamServiceLink
                key={i}
                serviceLabel={item.serviceLabel}
                serviceLink={item.serviceLink}
                style={{
                  ...item
                }}
              />
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
