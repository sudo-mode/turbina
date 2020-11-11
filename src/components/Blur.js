import './Blur.css';
import cn from 'classnames';

function Blur({ isPlayerExtend, isMobile }) {

  const blurLayerStyle = cn('blur__layer', { 'blur__layer_active': isPlayerExtend && isMobile })

  return (
    <div className={blurLayerStyle}></div>
  )
}

export default Blur