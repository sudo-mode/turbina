import './Footer.css';
import { yandexPraktikumLink } from '../configs/links';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__item">&copy; Маршак, 2020.</p>
      <p className="footer__item">
        Сделано студентами&#8196;
        <a
          className="footer__link"
          href={yandexPraktikumLink}
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
      </p>
    </footer>
  );
}

export default Footer;
