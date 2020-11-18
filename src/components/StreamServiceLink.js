import './StreamServiceLink.css';

function StreamServiceLink({ serviceLabel, serviceLink, style }) {
  return (
    <li className="stream-services__link-container" style={style}>
      <a
        className="stream-services__link"
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
