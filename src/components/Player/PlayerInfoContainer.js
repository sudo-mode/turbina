import './PlayerInfoContainer.css';
import PlayerInfoContent from './PlayerInfoContent';
import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery } from 'react-responsive';

function PlayerInfoContainer({ tracks, isOpen, isTextInfo, currentTrack, onTrackClick, isLoading }) {
  const isScrollbarHeight1280 = useMediaQuery({ query: '(min-width: 1280px)' });
  const isScrollbarHeight1024 = useMediaQuery({ query: '(min-width: 1025px)' });
  const isScrollbarHeight768 = useMediaQuery({ query: '(min-width: 768px)' });
  const isScrollbarHeight480 = useMediaQuery({ query: '(min-width: 480px)' });

  const height = isScrollbarHeight1280 ? 118 : isScrollbarHeight1024 ? 118 : isScrollbarHeight768 ? 102 : isScrollbarHeight480 ? 100 : 88;

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
