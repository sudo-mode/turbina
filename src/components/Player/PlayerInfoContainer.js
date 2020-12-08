import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Scrollbars } from 'react-custom-scrollbars';
import './PlayerInfoContainer.css';
import PlayerInfoContent from './PlayerInfoContent';
import cnWithSwitchAnimation from '../../utils/switchAnimation';
import cn from 'classnames';

function PlayerInfoContainer({ tracks, isOpen, isTextInfo, currentTrack, onTrackClick, isLoading }) {
  const isBigDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 481px)' });
  const isLandscape = useMediaQuery({query: '(orientation:landscape) and (max-height: 420px)'});

  const defineScrollbarHeight = (isBigDesktop, isDesktop, isLandscape, isTablet) => {
    if (isBigDesktop) return 130;
    if (isDesktop) return 102;
    if (isLandscape) return 98;
    if (isTablet) return 152;
    return 88;
  };
  
  const [scrollbarHeight, setScrollbarHeight] = useState(
    defineScrollbarHeight(isBigDesktop, isDesktop, isLandscape, isTablet)
  );

  useEffect(() => {
    setScrollbarHeight(defineScrollbarHeight(isBigDesktop, isDesktop, isLandscape, isTablet));
  }, [isBigDesktop, isDesktop, isLandscape, isTablet]);

  const renderView = ({ style, ...props }) => {
    return (
      <div
        className='player__scroll-box'
        style={{ ...style, overflowX: 'hidden' }}
        {...props}
      />
    );
  };

  const renderThumb = ({ style, ...props }) => {
    return (
      <div
        className='player__scroll-box-thumb'
        style={{ ...style }}
        {...props} />
    );
  };

  const renderTrack = ({ style, ...props }) => {
    return (
      <div
        className='player__scroll-box-track'
        style={{ ...style, width: 3 }}
        {...props} />
    );
  };

  const renderTrackHorizontal = ({ style, ...props }) => {
    return (
      <div
        style={{ display: 'none' }}
        {...props}
      />
    );
  };

  return (

    <div className={cn('player__info-container', { 'player__info-container_active': isOpen })}>
      <p className={cnWithSwitchAnimation('player__info-header', isTextInfo)}>
        {isTextInfo ? 'Текст песни:' : 'Релизы:'}
      </p>
      <Scrollbars
        className='player__scrollbars'
        renderView={renderView}
        style={{ height: scrollbarHeight }}
        renderThumbVertical={renderThumb}
        renderTrackVertical={renderTrack}
        renderTrackHorizontal={renderTrackHorizontal}
        hideTracksWhenNotNeeded={true}
      >
        < PlayerInfoContent
          tracks={tracks}
          isOpen={isOpen}
          isTextInfo={isTextInfo}
          currentTrack={currentTrack}
          onTrackClick={onTrackClick}
          isLoading={isLoading}
        />
      </Scrollbars >
    </div>
  )
}

export default PlayerInfoContainer;
