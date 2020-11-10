import React from 'react';
import './App.css';
import Main from './Main';
import Info from './Info';
import Footer from './Footer';
// import { testGetRequest } from '../utils/Api.js';

function App() {

  //Получаем из API данные плейлиста. Сейчас это тестовый запрос на RapidApi, возвращает массив треков.
  // React.useEffect(() => {
  //   testGetRequest.getTracksData()
  //      .then((response) => {
  //        console.log(response);
  //      })
  //      .catch((err) => {
  //         console.log(err);
  //      });
  // }, []);

  return (
    <div className="page">
      <div className="page__container">
        <Main />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
