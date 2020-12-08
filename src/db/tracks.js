import loveOutline from './audio/Контур любви — Хадн дадн feat. Варя Карпова и Федя Быстров.mp3';
import defaultBackground from '../images/background.png';
import fourNewTracksCover from '../images/four_new_tracks.jpeg';

// №1
import loveOutlineCover from '../images/love_outline_cover.jpg';

// New tracks
// №2
import doomsday from './audio/Конец света — TYAGOTENIE feat. Варя Карпова.mp3';
// №3
import whiteCat from './audio/У белого кота — Света Лукьянова feat. Никита Тугумов.mp3';
// №4
import squirrels from './audio/Белочки — Бабба feat. Варя Карпова.mp3';
// №5
import nature from './audio/Природа — Jerk feat. Федя Быстров.mp3';

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
  {
    id: '№2',
    trackName: 'Конец света',
    author: 'TYAGOTENIE',
    originalAuthor: 'Варя Карпова',
    text: `Конец света
    Конец света
    Конец света
    Настал
    
    Конец света
    Конец света
    Конец света
    Настал
    
    Нам конец света настал
    Нам конец света настал
    Конец света настал
    Нам
    
    Конец света настал
    Конец света настал
    Настал, настал, настал, настал,  
    Настал, настал, настал
    
    Веки веков пришли наши
    На веки веков мы ушли
    Ничего нет, мы идём искать
    Другую планету
    
    О нет, о нет, о нет,  о нет
    
    Наш конец света настал
    Конец света настал
    Навсегда
    На веки веков
    
    Падём мы в вечную темноту
    На скверную темноту
    Ищем новую планету
    Пригодную для жизни
    
    Пригодную для жизни
    Пригодную для жизни. 
    Землю номер два 
    Землю номер два
    
    Конец света настал
    Конец света настал
    Конец света 
    Конец кошкам 
    Конец света
    Всем людям
    
    Всем конец света настал
    Всем конец света настал
    Конец света настал
    Нам
    
    Бам-ба-ба-бам`,
    link: doomsday,
    videoLink: '',
    theme: {
      color: '#fff',
      backgroundColor: 'white',
      backgroundImage: `url(${defaultBackground})`,
    },
    albumPicture: fourNewTracksCover,
    streamings: [
      { 
        serviceLabel: 'Яндекс.Музыка',
        serviceLink: 'https://music.yandex.ru/'
      },
      { 
        serviceLabel: 'Spotify',
        serviceLink: 'https://open.spotify.com/'
      },
      { 
        serviceLabel: 'Apple Music',
        serviceLink: 'https://music.apple.com/ru/'
      },
      { 
        serviceLabel: 'VK Music',
        serviceLink: 'https://vk.com/music/'
      },
    ],
  },
  {
    id: '№3',
    trackName: 'У белого кота',
    author: 'Света Лукьянова',
    originalAuthor: 'Никита Тугумов',
    text: `У белого кота есть чёрный-чёрный хвост
    У белого кота есть чёрный-чёрный нос
    У белого кота есть чёрные усы
    У белого кота есть чёрные трусы
    У белого кота
    У белого кота
    
    У белого кота есть чёрные носки
    У белого кота есть чёрные полоски
    У белого кота есть чёрная спина
    У белого кота есть чёрная жена
    
    Всё есть у белого кота
    В сердце только пустота`,
    link: whiteCat,
    videoLink: '',
    theme: {
      color: '#fff',
      backgroundColor: 'white',
      backgroundImage: `url(${defaultBackground})`,
    },
    albumPicture: fourNewTracksCover,
    streamings: [
      { 
        serviceLabel: 'Яндекс.Музыка',
        serviceLink: 'https://music.yandex.ru/'
      },
      { 
        serviceLabel: 'Spotify',
        serviceLink: 'https://open.spotify.com/'
      },
      { 
        serviceLabel: 'Apple Music',
        serviceLink: 'https://music.apple.com/ru/'
      },
      { 
        serviceLabel: 'VK Music',
        serviceLink: 'https://vk.com/music/'
      },
    ],
  },
  {
    id: '№4',
    trackName: 'Белочки',
    author: 'Бабба',
    originalAuthor: 'Варя Карпова',
    text: `Я даже не помню, как я была маленькой
    Я будто умерла и воскресла
    Я будто спала и проснулась
    Когда мне было три с половиной
    Три с половиной ложки сахара
    На полную чашку какао
    Столько нам нужно с тобою, подруга,
    Чтобы опять проснуться.
    
    Три с половиной щепотки любви
    И заботы в этом бешеном ритме
    Три с половиной грамма ванили
    На нашу крепкую дружбу
    Я научилась взвешивать в граммах,
    Чтобы всё было чётко
    Чтобы всё было ровно,
    Чтобы всё было в ажуре.
    
    Святый боже
    Я не могу быть такой как все
    Все только и делают, что издеваются
    Надо мной
    Всё как-никак
    Всё как и никак
    О, белочки
    
    Святый боже
    Я не могу быть такой как все
    Все только и делают, что издеваются
    Надо мной
    Всё как-никак
    Всё как и никак
    О, белочки
    
    Я даже не помню как я была маленькой
    Только странные ощущения экзистенциального ужаса
    От того что не будет
    Ни мамы, ни папы, ни брата, ни кошки
    Меня, наконец
    Только пустое забвение
    Я будто умерла и воскресла
    Я будто спала и проснулась
    
    Когда в три утра бегут мурашки
    От всеобъемлющей паники
    От безысходности бытия
    А заодно ты идёшь в холодильник
    Идёшь в холодильник, идёшь в холодильник
    В нём три с половиной бутылки
    Столько молока нам надо с тобою
    Чтоб наконец заснуть
    
    Святый боже
    Я не могу быть такой как все
    Все только и делают, что издеваются
    Надо мной
    Всё как-никак
    Всё как и никак
    О, белочки
    
    Святый боже
    Я не могу быть такой как все
    Все только и делают, что издеваются
    Надо мной
    Всё как-никак
    Всё как и никак
    О, белочки`,
    link: squirrels,
    videoLink: '',
    theme: {
      color: '#fff',
      backgroundColor: 'white',
      backgroundImage: `url(${defaultBackground})`,
    },
    albumPicture: fourNewTracksCover,
    streamings: [
      { 
        serviceLabel: 'Яндекс.Музыка',
        serviceLink: 'https://music.yandex.ru/'
      },
      { 
        serviceLabel: 'Spotify',
        serviceLink: 'https://open.spotify.com/'
      },
      { 
        serviceLabel: 'Apple Music',
        serviceLink: 'https://music.apple.com/ru/'
      },
      { 
        serviceLabel: 'VK Music',
        serviceLink: 'https://vk.com/music/'
      },
    ],
  },
  {
    id: '№5',
    trackName: 'Природа',
    author: 'Jerk',
    originalAuthor: 'Федя Быстров',
    text: `Природа меня создала
    Природа меня и убъёт
    Потому что я 
    Потому что я 
    Потому что я идиот
    
    Природа, природа, природа, природа
    Природа, природа, природа, природа
    
    Природа нас создала
    Природа нас и убьёт
    Потому что в раю
    Потому что в раю 
    Потому что в раю всё вокруг поёт
    
    Потому что в раю
    Потому что в раю 
    Потому что в раю всё вокруг поёт
    
    Природа, природа, природа, природа
    Природа, природа, природа, пам-пам-пам-пам.`,
    link: nature,
    videoLink: '',
    theme: {
      color: '#fff',
      backgroundColor: 'white',
      backgroundImage: `url(${defaultBackground})`,
    },
    albumPicture: fourNewTracksCover,
    streamings: [
      { 
        serviceLabel: 'Яндекс.Музыка',
        serviceLink: 'https://music.yandex.ru/'
      },
      { 
        serviceLabel: 'Spotify',
        serviceLink: 'https://open.spotify.com/'
      },
      { 
        serviceLabel: 'Apple Music',
        serviceLink: 'https://music.apple.com/ru/'
      },
      { 
        serviceLabel: 'VK Music',
        serviceLink: 'https://vk.com/music/'
      },
    ],
  },
];

export default tracks;
