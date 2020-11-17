import './MarshakLink.css'

function MarshakLink({ marshakLabel, marshakLink, style }) {
  return (
    <li className="marshak__link-container" style={style}>
      <a
        className="marshak__link"
        href={marshakLink}
        target="_blank"
        rel="noreferrer"
      >
        {marshakLabel}
      </a>
    </li>
  );
}

export default MarshakLink;
