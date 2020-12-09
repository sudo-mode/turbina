import './MarshakLink.css';
import '../../style-mixes/main-link/main-link.css';

function MarshakLink({ marshakLabel, marshakLink, style }) {
  return (
    <li className="marshak-link-container" style={style}>
      <a
        className="main-link main-link_type_common"
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
