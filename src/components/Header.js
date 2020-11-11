import './Header.css';
import './Blur.css';
import { useState } from 'react';
import cn from 'classnames';
import StreamServiceLink from './StreamServiceLink';
import logoHeader from '../images/marshak-logo.png';
import { marshakLink, serviceLinks } from '../configs/links';
import { useTrail, animated, Transition } from 'react-spring';
import LinksCloseIcon from './svg/LinksCloseIcon';

function Header({ isPlayerExtend, isMobile }) {

  /* TODO - дописать комментарий к этим стейтам */
  const [isLinksMounted, setIsLinksMounted] = useState(false);
  const [isLinksHidden, setIsLinksHidden] = useState(true);
  const headerStyle = cn("header", { "blur": isPlayerExtend && isMobile})

  const handleServiceButtonClick = () => {
    setIsLinksHidden(!isLinksHidden);
    setIsLinksMounted(true);
  };

  /* TODO - написать комментарий к анимации кнопки Стриминги */
  /* TODO - вынести магические числа и проперти config в нормальные переменные (для анимации) */

  /* Создаем анимированную компоненту из обычной */
  const AnimatedStreamServiceLink = animated(StreamServiceLink);

  /* Конфиг для анимации ссылок на узких экранах. Меняются прозрачность и смещение по горизонтали*/
  const mobileConfig = {
    config: { mass: 1, tension: 200, friction: 18 },
    to: {
      opacity: !isLinksHidden ? 1 : 0,
      x: !isLinksHidden ? 0 : -50
    },
    from: {
      opacity: 0,
      x: -50
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
    x: 0
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
    <header className={headerStyle}>
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
            <Transition
              items={isLinksHidden ? "Стриминги" : <LinksCloseIcon />}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              initial={{ opacity: 1 }}
              config={{ mass: 1, tension: 140, friction: 30 }}
              keys={() => isLinksHidden ? 1 : 2} // убираем лишние рендеры для animated.span
            >
              {(values, item) => (
                <animated.span style={values}>{item}</animated.span>
              )}
            </Transition>
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
