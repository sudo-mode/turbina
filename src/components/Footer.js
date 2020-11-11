import './Footer.css';
import './Blur.css';
import cn from 'classnames';

function Footer({ isPlayerExtend, isMobile }) {

  const footerStyle = cn("footer", { "blur": isPlayerExtend && isMobile })

  return (
    <footer className={footerStyle}>
      <p className="footer__item">&copy; Маршак, 2020.</p>
      <p className="footer__item">
        Сделано студентами&#8196;
        <a
          className="footer__link"
          href="https://praktikum.yandex.ru"
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
