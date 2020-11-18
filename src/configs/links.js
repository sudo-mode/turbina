import FacebookIcon from "../components/svg/FacebookIcon";
import InstagramIcon from "../components/svg/InstagramIcon";
import VkontakteIcon from "../components/svg/VkontakteIcon";


const marshakMainLink = 'https://marshakbooks.ru/';
const yandexPraktikumLink = {
  title: 'Яндекс.Практикума',
  link:'https://www.notion.so/de0ecc64f8134e178448dcbc6382046e',
};

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

// TODO: вставить актуальные ссылки на стриминговые сервисы
const serviceLinks = [
  { 
    serviceLabel: 'Яндекс.Музыка',
    serviceLink: 'https://music.yandex.ru/album/12769745'
  },
  { 
    serviceLabel: 'Spotify',
    serviceLink: 'https://open.spotify.com/track/0FRjmDhfKmVARMOvmUm6no?si=rwTima3JQaWdse3mrQko1g'
  },
  { 
    serviceLabel: 'Apple Music',
    serviceLink: 'https://music.apple.com/ru/album/контур-любви-feat-варя-карпова-федя-быстров-single/1539942736'
  },
  { 
    serviceLabel: 'VK Music',
    serviceLink: 'https://vk.com/music/album/-2000389059_9389059_4fb8e57c6b6b7b1795'
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

export { marshakMainLink, marshakLinks, serviceLinks, yandexPraktikumLink, marshakNavLinks, socialNetworks };
