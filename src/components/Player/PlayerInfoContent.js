import './PlayerInfoContent.css';
import PlayerTrack from './PlayerTrack';

function PlayerInfoContent({ tracks, isOpen, isTextInfo, currentTrack, onTrackClick }) {

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

  return (
      <div>
        {setInfoContent(isTextInfo)}
      </div>   
  )
}

export default PlayerInfoContent;
