import './PlayerInfo.css';
import PlayerTrack from './PlayerTrack';
import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from 'react';

function PlayerInfo({ tracks, isOpen, isTextInfo, currentTrack, onTrackClick }) {

  

  const setTextLyricsFormat = (text) => {
    const textArray = text.split('\n')
    return textArray.map((line, i) => (
      <p key={i} className='player__text-line'>{line}</p>
    ))
  }

  const setSongLyrics = (currentTrack) => {
    return (<>
      <p className='player__info-header'>Текст песни:</p>
      {setTextLyricsFormat(currentTrack.text)}
    </>)
  }

  const setReleaseList = (tracks) => {
    if (tracks.length === 1) {
      return <p className='player__info-header'>Пока что у вас только один релиз</p>
    } else {
      return (
        <>
          <p className='player__info-header'>Релизы: </p>
          <ul className='player__tracks'>
            {tracks.map((track, i) => (
              <li key={track.id} className='player__track-item'>
                <PlayerTrack
                  track={track}
                  onTrackClick={onTrackClick}
                  inList={true}
                />
              </li>
            ))}
          </ul>
        </>
      )
    }
  }

  const setInfoContent = (isTextInfo) => {
    if (isTextInfo) {
      return setSongLyrics(currentTrack)
    } else {
      return setReleaseList(tracks)
    }
  }

  const [top, setTop] = useState(0);

  const handleUpdate = (values) => {
    setTop(values);
  }

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
        className="box"
        style={{ ...style, ...viewStyle }}
        {...props} />
    );
  }

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
  }

  const renderTrack = ({ style, ...props }) => {
    const finalStyle = {
      ...style,
      right: 2,
      bottom: 2,
      top: 12,
      borderRadius: 4,
      backgroundColor: `rgba( 243, 243, 243, 0.1)`,
      width: 3,
    };
    return <div style={finalStyle} {...props} />;
  }

  const renderTrackHorizontal = ({ style, ...props }) => {
    const finalStyle = {
      display: 'none'
    };
    return <div style={finalStyle} {...props} />;
  }

  return (

    <div className={`player__info ${isOpen && 'player__info_active'}`}>
      <Scrollbars
        renderView={renderView}
        style={{ height: 118 }}
        onUpdate={handleUpdate}
        renderThumbVertical={renderThumb}
        renderTrackVertical={renderTrack}
        renderTrackHorizontal={renderTrackHorizontal}
      >
      <div>
        {setInfoContent(isTextInfo)}
      </div>   
      </Scrollbars >
    </div>
  )
}

export default PlayerInfo;
