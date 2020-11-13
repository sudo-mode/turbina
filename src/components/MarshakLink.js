import './MarshakLink.css';

import cn from 'classnames';

import { marshakLink } from '../configs/links';
import logoHeader from '../images/marshak-logo.png';

function MarshakLink({ className }) {
  return (
    <a
      className={
        cn("marshak-link", className)
      }
      href={marshakLink}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="marshak-logo"
        src={logoHeader}
        alt="Логотип книжного магазина Маршак"
      />
    </a>
  );
}

export default MarshakLink;
