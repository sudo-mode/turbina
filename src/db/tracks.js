import loveOutline from './audio/Контур любви — Хадн Дадн feat. Варя Карпова и Федя Быстров.mp3';
import defaultBackground from '../images/background.png';
import loveOutlineCover from '../images/love_outline_cover.jpg';



export const tracks = [
  {
    id: '№1',
    trackName: 'Контур любви',
    author: 'Хадн Дадн',
    originalAuthor: 'Варя Карпова и Федя Быстров',
    text: `Мой милый, милый мальчик,
      Моя милая, милая девочка.
      Никогда не знаешь, что будет дальше
      В этой гадкой зиме`,
    link: loveOutline,
    videoLink: '',
    theme: {
      color: '#fff',
      backgroundColor: 'white',
      backgroundImage: `url(${defaultBackground})`,
    },
    albumPicture: '../images/love_outline_cover.jpg',
  },
]

export default tracks;
