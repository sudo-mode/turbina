import './StreamServices.css';

import { useEffect, useState } from 'react';
import { useTrail, animated, Transition } from 'react-spring';
import cn from 'classnames';

import StreamServiceLink from './StreamServiceLink';
import LinksCloseIcon from '../svg/LinksCloseIcon';

function StreamServices({ isMobile, isLandscape, isPlayerExtend, currentTrack }) {
  const serviceLinks = currentTrack.streamings
  /* Разделение между стейтами isLinksMounted и isLinksHidden сделано для корректной анимации.
  Ссылки должны размонтироваться по окончании анимации, иначе анимации не будет. */
  const [isLinksMounted, setIsLinksMounted] = useState(false);
  const [isLinksHidden, setIsLinksHidden] = useState(true);

  const handleServiceButtonClick = () => {
    setIsLinksHidden(!isLinksHidden);
    setIsLinksMounted(true);
  };

  /* Создаем анимированную компоненту из обычной */
  const AnimatedStreamServiceLink = animated(StreamServiceLink);

  /* Конфиг для анимации ссылок на широком экране. 
  Сейчас конфиг обеспечивает статичное отображение при загрузке страницы */
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

  /* Для маленьких экранов и landscape: если пользователь развернул ссылки и открыл плеер, 
  то сворачиваем ссылки, чтобы дать плееру полностью выехать*/
  useEffect(() => {
    if (isPlayerExtend && (isMobile || isLandscape)) {
      setIsLinksHidden(true);
      setIsLinksMounted(false);
    }
  }, [isPlayerExtend, isLandscape, isMobile]);

  return (
    <div className="stream-services">
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
            keys={() => (isLinksHidden ? 1 : 2)} // убираем лишние рендеры для animated.span
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
                ...item,
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default StreamServices;
