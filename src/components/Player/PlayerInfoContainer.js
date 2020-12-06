import './PlayerInfoContainer.css';
import PlayerInfoContent from './PlayerInfoContent';
import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';

function PlayerInfoContainer({ tracks, isOpen, isTextInfo, currentTrack, onTrackClick, isLoading }) {
  const isDesctop = useMediaQuery({ query: '(min-width: 1025px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 481px)' });
  const isLandscape = useMediaQuery({query: '(orientation:landscape) and (max-height: 420px)'})

  const height = isDesctop ? 130 : isTablet ? 102 : isLandscape ? 98 : isMobile ? 152 : 88;

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
    <div className={`player__info-container ${isOpen && 'player__info-container_active'}`}>
      <p className='player__info-header'>Релизы: </p>
      <Scrollbars
        className='player__scrollbars'
        renderView={renderView}
        style={{ height: height }}
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
