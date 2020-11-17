import './MarshakNavigation.css'

function MarshakNavigation ({ className, links }) {
  return (
    <div className={`marshak-navigation ${className}`}>
      <p className="copyright">&copy; Маршак</p>
      <ul className="marshak-navigation__links">
        {links.map((item) => (
          <li className="marshak-navigation__link-container" key={item.link}>
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
    </div>
  )
}

export default MarshakNavigation;
