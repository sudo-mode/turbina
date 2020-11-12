import './Header.css';
import './Blur.css';
import { useEffect, useState } from 'react';
import { useTrail, animated, Transition } from 'react-spring';
import cn from 'classnames';
import StreamServiceLink from './StreamServiceLink';
import { marshakLink, serviceLinks } from '../configs/links';
import logoHeader from '../images/marshak-logo.png';
import LinksCloseIcon from './svg/LinksCloseIcon';

/* TODO - написать комментарий к анимации кнопки Стриминги */
/* TODO - вынести магические числа из проперти config в нормальные переменные (для анимации) */

function Header({ isPlayerExtend, isMobile, isLandscape }) {
  const headerStyle = cn("header", { "blur": isPlayerExtend && (isMobile || isLandscape) });

  /* Разделение между стейтами isLinksMounted и isLinksHidden сделано для корректной анимации. 
  Если размонтировать ссылки сразу по нажатию на кнопку, анимировать это не получится.
  Ссылки должны размонтироваться по окончании анимации. */
  const [isLinksMounted, setIsLinksMounted] = useState(false);
  const [isLinksHidden, setIsLinksHidden] = useState(true);

  const handleServiceButtonClick = () => {
    setIsLinksHidden(!isLinksHidden);
    setIsLinksMounted(true);
  };

  /* Создаем анимированную компоненту из обычной */
  const AnimatedStreamServiceLink = animated(StreamServiceLink);

  /* Конфиг для анимации на широком экране. 
  Сейчас конфиг обеспечивает статичное отображение при загрузке страницы) */
  const desktopConfig = {
    opacity: 1,
    x: 0
  };

  /* Конфиг для анимации ссылок на узких экранах. 
  Меняются прозрачность и смещение по горизонтали*/
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

  /* Массив с объектами пропсов для анимации каждой ссылки */
  const trail = useTrail(serviceLinks.length, (isMobile || isLandscape) ? mobileConfig : desktopConfig);

  /* Сборка объектов с полным набором пропсов для будущих анимированных компонент.
  Объединяются пропсы для анимации и обычные пропсы (название и адрес ссылки).
  Объектов в массиве столько, сколько ссылок на стриминговые сервисы. */
  const serviceLinksProps = serviceLinks.map((link, i) => {
    const linkProps = {};
    Object.assign(linkProps, link, trail[i]);
    return linkProps;
  });

  /* Для маленьких экранов: если пользователь развернул ссылки и открыл плеер, 
  то сворачиваем ссылки, чтобы дать плееру полностью развернуться на небольших по высоте смартфонах*/
  useEffect(() => {
    if (isPlayerExtend && (isMobile || isLandscape)) {
      setIsLinksHidden(true);
      setIsLinksMounted(false);
    }
  }, [isPlayerExtend, isLandscape, isMobile]);

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
        {(isMobile || isLandscape) && (
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

        {(isLinksMounted || !(isMobile || isLandscape)) && (
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
