import './MarshakNavigation.css'

function MarshakNavigation ({ links }) {
  return (
    <ul className="marshak-navigation">
      {links.map((item, i) => (
        <li className="marshak-navigation__link-container" key={i}>
          <a
            className="marshak-navigation__link"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MarshakNavigation;
