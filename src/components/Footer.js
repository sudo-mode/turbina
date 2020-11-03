import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
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
