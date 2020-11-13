import './PlayerCover.css';

function PlayerCover({ image, style }) {
  return (
    <div className="cover-wrapper" style={style}>
      <div
        className="cover"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  )
}

export default PlayerCover;
