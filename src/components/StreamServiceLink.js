function StreamServiceLink({ serviceCaption, serviceLink }) {
  return (
    <li className="stream-services__link-container">
      <a
        className="stream-services__link"
        href={serviceLink}
        target="_blank"
        rel="noreferrer"
      >
        {serviceCaption} ↗
      </a>
    </li>
  );
}

export default StreamServiceLink;
