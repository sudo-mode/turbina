import './PlayerInfoContainer.css';
import PlayerInfoContent from './PlayerInfoContent';
import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from 'react';

function PlayerInfoContainer({ tracks, isOpen, isTextInfo, currentTrack, onTrackClick, isLoading }) {

  const [top, setTop] = useState(0);

  const handleUpdate = (values) => {
    setTop(values);
  };

  const renderView = ({ style, ...props }) => {
    const viewStyle = {
      paddingTop: 4,
      paddingBottom: 12,
      overflowy: 'scroll',
      overflowX: 'hidden',
      width: `calc(${100}% + ${60}px)`,
      WebkitMaskImage: `-webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0,0,0,1) 8%,
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,1) 78%,
      rgba(0,0,0,0) 85%)`,
    };

    return (
      <div
        className='player__box'
        style={{ ...style, ...viewStyle }}
        {...props} />
    );
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 4,
      backgroundColor: `rgba( 255, 255, 255, 0.3)`,
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  };

  const renderTrack = ({ style, ...props }) => {
    const finalStyle = {
      ...style,
      right: 2,
      bottom: 10,
      top: 2,
      borderRadius: 4,
      backgroundColor: `rgba( 243, 243, 243, 0.1)`,
      width: 3,
    };
    return <div style={finalStyle} {...props} />;
  };

  const renderTrackHorizontal = ({ style, ...props }) => {
    const finalStyle = {
      display: 'none'
    };
    return <div style={finalStyle} {...props} />;
  };

  return (

    <div className={`player__info-container ${isOpen && 'player__info-container_active'}`}>
      <Scrollbars
        renderView={renderView}
        style={{ height: 118 }}
        onUpdate={handleUpdate}
        renderThumbVertical={renderThumb}
        renderTrackVertical={renderTrack}
        renderTrackHorizontal={renderTrackHorizontal}
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
