import './Marshak.css';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames';
import { Transition, animated, useTrail } from 'react-spring';

import { marshakMainLink, marshakLinks } from '../../configs/links';

import MarshakLink from './MarshakLink';
import HamburgerIcon from '../svg/HamburgerIcon';
import LinksCloseIcon from '../svg/LinksCloseIcon';
import MarshakLogo from '../svg/MarshakLogo'

function Marshak({ className, isMobile, isLandscape, isPlayerExtend }) {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const [inHover, setHover] = useState(false);
  const [isLinksMounted, setIsLinksMounted] = useState(false);
  const [isLinksHidden, setIsLinksHidden] = useState(true);
  const showLinksCondition = (isTablet && !isLinksHidden) || (!isTablet && inHover);

  const handleMouseEnter = () => {
    if (!isTablet) {
      setHover(true);
      setIsLinksHidden(false);
      setIsLinksMounted(true);
    }
  }

  const handleMouseLeave = () => {
    if (!isTablet) {
      setHover(false);
      setIsLinksHidden(true);
    }
  }

  const handleHamburgerButtonClick = () => {
    setIsLinksHidden(!isLinksHidden);
    setIsLinksMounted(true);
  }

  const AnimatedMarshakLink = animated(MarshakLink);

  const animationConfig = {
    config: { mass: 1, tension: 200, friction: 18 },
    to: {
      opacity: !isLinksHidden ? 1 : 0,
      x: !isLinksHidden ? 0 : 50
    },
    from: {
      opacity: 0,
      x: 50
    },
    reverse: isLinksHidden,
    onRest: () => {
      if (isLinksHidden) {
        setIsLinksMounted(false);
      }
    }
  };

  const trail = useTrail(marshakLinks.length, animationConfig);

  const marshakLinksProps = marshakLinks.map((link, i) => {
    const linkProps = {};
    Object.assign(linkProps, link, trail[i]);
    return linkProps;
  });

  useEffect(() => {
    if (isPlayerExtend && (isMobile || isLandscape)) {
      setIsLinksHidden(true);
      setIsLinksMounted(false);
    }
  }, [isPlayerExtend, isLandscape, isMobile]);

  return (
    <div
      className={cn("marshak", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="marshak__handlers">
        {isTablet && (
          <button
            className="marshak__button"
            type="button"
            onClick={handleHamburgerButtonClick}
          >
            <Transition
              items={isLinksHidden ? <HamburgerIcon /> : <LinksCloseIcon/>}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              initial={{ opacity: 1 }}
              config={{ mass: 1, tension: 120, friction: 30 }}
              keys={() => (isLinksHidden ? 1 : 2)} // убираем лишние рендеры для animated.span
            >
              {(values, item) => (
                <animated.span style={values}>{item}</animated.span>
              )}
            </Transition>
          </button>
        )}
        <a
          className="marshak__main-link"
          href={marshakMainLink}
          target="_blank"
          rel="noreferrer"
        >
          <MarshakLogo className="marshak-logo" />
        </a>
      </div>

      {(isLinksMounted || showLinksCondition) && (
        <ul className="marshak__links">
          {marshakLinksProps.map((item, i) => (
            <AnimatedMarshakLink
              key={i}
              marshakLabel={item.marshakLabel}
              marshakLink={item.marshakLink}
              marshakLinkTarget={item.target}
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

export default Marshak;
