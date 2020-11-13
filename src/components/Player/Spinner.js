import cn from 'classnames';
import './Spinner.css';

function Spinner ({ width='50%', height='50%', isImageLoaded }) {
  return (
    <div
      className={cn("spinner", {"spinner_hidden": isImageLoaded})}
      style={{width: width, height: height }}
    />
  )
}

export default Spinner;
