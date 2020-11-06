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
    const finalStyle = {

    };
    return (
      <div
        className='player__scroll-box-track'
        style={{ ...style, width: 3 }}
        {...props} />
    );
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
