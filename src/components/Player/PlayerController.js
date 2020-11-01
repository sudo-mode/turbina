import './PlayerController.css';
import playBtn from '../../images/play-icon.svg';
import pauseBtn from '../../images/pause-icon.svg';

function PlayerController ({ isPlaying }) {
  return (
    <>
      <audio>
        <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"  type="audio/mp3" />
      </audio>
      <div className="player__controller">
        <button
          className="player__control-btn"
          type="button"
          style={{ backgroundImage: `url(${isPlaying ? pauseBtn : playBtn})` }}
        />
        <p className="player__song">Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров</p>
        <div className="player__timer">0:24</div>
        <div className="player__timeline">
          <div className="player__progress" />
        </div>
      </div>
    </>
  )
}

export default PlayerController;
