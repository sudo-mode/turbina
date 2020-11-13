import './Background.css';
// import cn from 'classnames';
import tracks from '../db/tracks';

function Background({ isPlayerExtend, isMobile, currentTrack }) {

  // const backgroundStyle = cn("background", { "background_blur": isPlayerExtend && isMobile})
console.log(currentTrack);
console.log(currentTrack.theme.backgroundImage)
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${currentTrack.theme.backgroundImage})`, }}
    ></div>
  )
}

export default Background;
