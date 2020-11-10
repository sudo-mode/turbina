import './PlayerCover.css';

const PlayerCover = ({ image }) => {
  return (
    <div className="cover-wrapper">
      <div
        className="cover"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  )
}

export default PlayerCover;
