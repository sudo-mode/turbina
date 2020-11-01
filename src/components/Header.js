import './Header.css';
import logoHeader from '../images/marshak-logo.png';

function Header () {
  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Логотип Маршак"/>
      <ul className="header__links">
        <li className="header__link">youtube</li>
        <li className="header__link">vk</li>
        <li className="header__link">appleMusic</li>
      </ul>
    </header>
  )
}

export default Header;
