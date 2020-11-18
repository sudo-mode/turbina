import cn from 'classnames';
import './Blur.css';

function Blur({ isPlayerExtend, isMobile, isLandscape }) {
  const blurLayerStyle = cn('blur__layer', { 'blur__layer_active': isPlayerExtend && (isMobile || isLandscape) })

  return (
    <div className={blurLayerStyle}></div>
  )
}

export default Blur;
