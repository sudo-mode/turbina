import './Header.css';
import logoHeader from '../images/marshak-logo.png';

function Header () {
  return (
    <header className="header">
      <a className="header__shop-link" href="https://marshakbooks.ru/" target="_blank" rel="noreferrer">
        <img className="shop-logo" src={logoHeader} alt="Логотип Маршак"/>
      </a>

      {/* TODO - вынести список ссылок в отдельный компонент */}
      <ul className="header__platform-links">
        <li className="header__platform-link-container">
          {/* TODO - подставить правильную ссылку */}
          <a className="header__platform-link" href="https://marshakbooks.ru/" target="_blank" rel="noreferrer">Яндекс.Музыка ↗</a>
        </li>
        <li className="header__platform-link-container">
          {/* TODO - подставить правильную ссылку */}
          <a className="header__platform-link" href="https://marshakbooks.ru/" target="_blank" rel="noreferrer">Spotify ↗</a>
        </li>
        <li className="header__platform-link-container">
          {/* TODO - подставить правильную ссылку */}
          <a className="header__platform-link" href="https://marshakbooks.ru/" target="_blank" rel="noreferrer">Apple Music ↗</a>
        </li>
        <li className="header__platform-link-container">
          {/* TODO - подставить правильную ссылку */}
          <a className="header__platform-link" href="https://marshakbooks.ru/" target="_blank" rel="noreferrer">VK Music ↗</a>
        </li>
      </ul>
    </header>
  )
}

export default Header;
