import FacebookIcon from "../components/svg/FacebookIcon";
import InstagramIcon from "../components/svg/InstagramIcon";
import VkontakteIcon from "../components/svg/VkontakteIcon";
import TelegramIcon from "../components/svg/TelegramIcon";

// Ссылка на главную страницу Маршак (используется для логотипа в хедере)
const marshakMainLink = 'https://marshakbooks.ru/';

// Ссылка на Яндекс.Практикум - Создание сайтов для НКО
const yandexPraktikumLink = {
  title: 'Яндекс.Практикума',
  link:'https://www.notion.so/de0ecc64f8134e178448dcbc6382046e',
};

// Ссылки, появляющиеся при наведении на логотип Маршака в хедере
const marshakLinks = [
  {
    marshakLabel: 'Книги',
    marshakLink: 'https://marshakbooks.ru/'
  },
  {
    marshakLabel: 'Школа',
    marshakLink: 'https://marshakbooks.ru/school/'
  },
  {
    marshakLabel: 'О нас',
    marshakLink: 'https://marshakbooks.ru/о-нас/'
  },
];

// Ссылки для футера
const marshakNavLinks = [
  {
    title: 'Книги',
    link: 'https://marshakbooks.ru/',
  },
  {
    title: 'Школа',
    link: 'https://marshakbooks.ru/school/',
  },
  {
    title: 'О нас',
    link: 'https://marshakbooks.ru/о-нас/',
  },
];

// Иконки соцсетей
const socialNetworks = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/marshak_books/',
    IconElement: InstagramIcon,
    className: 'social-networks__instagram',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/marshakbooks/',
    IconElement: FacebookIcon,
    className: 'social-networks__facebook',
  },
  {
    name: 'Vkontakte',
    link: 'https://vk.com/marshakbooks',
    IconElement: VkontakteIcon,
    className: 'social-networks__vkontakte',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/marshakbooks',
    IconElement: TelegramIcon,
    className: 'social-networks__telegram',
  },
]

export { marshakMainLink, marshakLinks, yandexPraktikumLink, marshakNavLinks, socialNetworks };
