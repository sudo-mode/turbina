import './Footer.css';
import { yandexPraktikumLink, marshakNavLinks } from '../configs/links';
import MarshakNavigation from './MarshakNavigation';
import SocialNetworks from './SocialNetworks';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <MarshakNavigation className="footer__marshak" links={marshakNavLinks} />
        <SocialNetworks className="footer__social" />
        <p className="footer__paragraph footer__yandex">
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
      </div>
      <p className="footer__owner-info footer__paragraph">
        ИП&nbsp;Карпов Сергей Сергеевич. Свидетельство о&nbsp;государственной регистрации 34 
        &#8470;&nbsp;004421830; ИНН&nbsp;343510777851; ОГРНИП&nbsp;316344300079818. 
      </p>
      <p className="footer__owner-info footer__paragraph">
        Мы&nbsp;работаем: 11:00&nbsp;&mdash; 20:00; Наш адрес: Казарменный 
        пер.&nbsp;4, стр.&nbsp;3; Телефон: +7&nbsp;(905)&nbsp;567&#8209;33&#8209;53, +7&nbsp;(999)&nbsp;831&#8209;51&#8209;08; 
        marshakbooks@gmail.com
      </p>
    </footer>
  );
}

export default Footer;
