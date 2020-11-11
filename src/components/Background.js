import './Background.css';
import cn from 'classnames';

function Background({ isPlayerExtend, isMobile }) {

  const backgroundStyle = cn("background", { "background_blur": isPlayerExtend && isMobile })

  return (
    <div className={backgroundStyle}></div>
  )
}

export default Background;
