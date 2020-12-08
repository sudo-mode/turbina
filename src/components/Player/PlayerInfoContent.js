import './PlayerInfoContent.css';
import PlayerTrack from './PlayerTrack';
import cnWithSwitchAnimation from '../../utils/switchAnimation';

function PlayerInfoContent({ tracks, isTextInfo, currentTrack, onTrackClick }) {

  const setTextLyricsFormat = (text) => {
    const textArray = text.split('\n')
    return textArray.map((line, i) => (
      <p key={i} className='player__text-line'>{line}</p>
    ))
  }

  const setSongLyrics = (currentTrack) => {
    return (
      <>
        {setTextLyricsFormat(currentTrack.text)}
      </>)
  }

  const setReleaseList = (tracks) => {
    if (tracks.length === 1) {
      return <p className='player__info-header'>Пока это единственный трек в проекте, но 12 декабря появятся новые</p>
    } else {
      return (
        <>
          <ul className='player__tracks'>
            {tracks.map((track, i) => (
              <li key={track.id} className='player__track-item'>
                <PlayerTrack
                  trackId={track.id}
                  currentTrack={currentTrack}
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

  return (
    <>
      <div className={cnWithSwitchAnimation('player__content', isTextInfo)}>
        {isTextInfo ? setSongLyrics(currentTrack) : setReleaseList(tracks)}
      </div>
    </>
  )
}

export default PlayerInfoContent;
