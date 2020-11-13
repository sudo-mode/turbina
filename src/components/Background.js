import './Background.css';
// import cn from 'classnames';

function Background({ isPlayerExtend, isMobile, currentTrack }) {

  // const backgroundStyle = cn("background", { "background_blur": isPlayerExtend && isMobile})

  return (
    <div
      className="background"
      style={{ backgroundImage: `${currentTrack.theme.backgroundImage}`, }}
    ></div>
  )
}

export default Background;
