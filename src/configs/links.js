import FacebookIcon from "../components/svg/FacebookIcon";
import InstagramIcon from "../components/svg/InstagramIcon";
import VkontakteIcon from "../components/svg/VkontakteIcon";


const marshakLink = 'https://marshakbooks.ru/';
const yandexPraktikumLink = {
  title: 'Яндекс.Практикума',
  link:'https://www.notion.so/de0ecc64f8134e178448dcbc6382046e',
};

// TODO: вставить актуальные ссылки на стриминговые сервисы
const serviceLinks = [
  { 
    serviceLabel: 'Яндекс.Музыка',
    serviceLink: 'https://music.yandex.ru/'
  },
  { 
    serviceLabel: 'Spotify',
    serviceLink: 'https://www.spotify.com/ru-ru/'
  },
  { 
    serviceLabel: 'Apple Music',
    serviceLink: 'https://music.apple.com/'
  },
  { 
    serviceLabel: 'VK Music',
    serviceLink: 'https://vk.com/vkmusic'
  },
];

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
    link: 'https://marshakbooks.ru/%d0%be-%d0%bd%d0%b0%d1%81/',
  },
];

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
]

export { marshakLink, serviceLinks, yandexPraktikumLink, marshakNavLinks, socialNetworks };
