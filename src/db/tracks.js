import loveOutline from './audio/Контур любви — Хадн дадн feat. Варя Карпова и Федя Быстров.mp3';
import defaultBackground from '../images/background.png';
import loveOutlineCover from '../images/love_outline_cover.jpg';

export const tracks = [
  {
    id: '№1',
    trackName: 'Контур любви',
    author: 'Хадн дадн',
    originalAuthor: 'Варя Карпова и Федя Быстров',
    text: `Мой милый, милый мальчик, 
      Моя милая, милая девочка.
      Никогда не знаешь, что будет дальше
      В этой гадкой зиме.
      Мой милый, милый мальчик, 
      Моя милая, милая девочка.
      Никогда не знаешь, что будет дальше
      В этой гадкой зиме.
      
      Но я так сильно люблю тебя, 
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу.
      Я так сильно люблю тебя, 
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу.
        
      Мы выйдем на лужочек,
      Мы выйдем на поляночку.
      На том лужочке и полянке
      Будем мы всегда.
      Пройдут многие годы,
      И много изменится.
      А ты в других домах, случайных снах
      Заглядывай сюда.
        
      Где я так сильно люблю тебя, 
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу.
      Я так сильно люблю тебя, 
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу.
      Я так сильно люблю тебя, 
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу.
      Я так сильно люблю тебя, 
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу за контур любви,
      Что выхожу.`,
    link: loveOutline,
    videoLink: '',
    theme: {
      color: '#fff',
      backgroundColor: 'white',
      backgroundImage: `url(${defaultBackground})`,
    },
    albumPicture: loveOutlineCover,
    streamings: [
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
    ],
  },
];

export default tracks;
