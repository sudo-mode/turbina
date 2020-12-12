import cn from 'classnames';
import './Spinner.css';

function Spinner ({ width='50%', height='50%', isImageLoaded }) {
  return (
    <div
      className={cn("spinner", {"spinner_hidden": isImageLoaded})}
      style={{width, paddingBottom: height}}
    >
      <div className="spinner__content" />
    </div>
  )
}

export default Spinner;
