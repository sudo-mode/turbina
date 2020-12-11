import './MarshakLink.css';
import '../../style-mixes/main-link/main-link.css';

function MarshakLink({ marshakLabel, marshakLink, marshakLinkTarget, style }) {
  return (
    <li className="marshak-link-container" style={style}>
      <a
        className="main-link main-link_type_common"
        href={marshakLink}
        target={marshakLinkTarget}
        rel="noreferrer"
      >
        {marshakLabel}
      </a>
    </li>
  );
}

export default MarshakLink;
