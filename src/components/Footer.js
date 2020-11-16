import './Footer.css';
import { yandexPraktikumLink, marshakNavLinks } from '../configs/links';
import MarshakNavigation from './MarshakNavigation';
import SocialNetworks from './SocialNetworks';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__item">&copy; Маршак, 2020.</p>
      <MarshakNavigation links={marshakNavLinks} />
      <SocialNetworks />
      <p className="footer__item">
        Сделано студентами&#8196;
        <a
          className="footer__link"
          href={yandexPraktikumLink.link}
          target="_blank"
          rel="noreferrer"
        >
          {yandexPraktikumLink.title}
        </a>
      </p>
      <p className="footer__owner-info">
        ИП Карпов Сергей Сергеевич. Свидетельство о государственной регистрации 34 №004421830; 
        ИНН 343510777851; ОГРНИП 316344300079818. 
      </p>
      <p className="footer__owner-info">
      Мы работаем: 11:00 — 20:00 (Выходной: Понедельник); Наш адрес: Казарменный пер. 4, стр. 3; 
      Телефон: +7 (905) 567-33-53, +7 (999) 831-51-08; marshakbooks@gmail.com
      </p>
    </footer>
  );
}

export default Footer;
