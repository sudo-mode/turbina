import './StreamServiceLink.css';
import '../../style-mixes/main-link/main-link.css'

function StreamServiceLink({ serviceLabel, serviceLink, style }) {
  return (
    <li className="stream-services-link-container" style={style}>
      <a
        className="main-link main-link_type_common"
        href={serviceLink}
        target="_blank"
        rel="noreferrer"
      >
        {serviceLabel} ↗
      </a>
    </li>
  );
}

export default StreamServiceLink;
