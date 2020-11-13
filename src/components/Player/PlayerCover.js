import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import './PlayerCover.css';
import Spinner from './Spinner';
import gag from '../../images/note-round-icon.svg';

function PlayerCover({
  image,
  style,
  trackName,
  author,
  originalAuthor
}) {
  const [isLoaded, setLoadState] = useState(false);
  const imageLink = image ? image : gag;
  const imageRef = useRef();

  useEffect(() => { 
    /* в Safari изображения подгружаются в кеш, и грузятся из него так быстро, что useEffect срабатывает уже после подгрузки изображения, и всё ломает. Поэтому теперь это обернуто в if */
    if (!imageRef.current.complete) {
      setLoadState(false);
    }
  }, [image])
  
  const handleLoad = () => {
    setLoadState(true);
  }

  return (
    <div className="cover-wrapper" style={style}>
      <img
        ref={imageRef}
        src={imageLink}
        className={cn("cover", {"cover_visible": isLoaded})}
        onLoad={handleLoad}
        alt={`Обложка трека ${trackName}, исполняет ${author}, стихи ${originalAuthor}`}
      />
      <Spinner
        isImageLoaded={isLoaded}
      />
    </div>
  )
}

export default PlayerCover;
