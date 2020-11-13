class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _getResponseData(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }

    //На случай, если есть несколько GET запросов с разными данными
    getData() {
        return fetch(`${this._url}`, {
            headers: this._headers,
        });
    }

    //GET запрос на массив с треками
    getTracksData() {
        return this.getData()
           .then(res => this._getResponseData(res));  
    }

    //POST запрос для отправки формы
    submitForm(formData) {
        return fetch(`${this._url}`, {
            method: "POST",
            headers:  this._headers,
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                tel: formData.tel,
                text: formData.text,
                offer: formData.offer
              })
        }).then(res => this._getResponseData(res));
       
    }
}

//Сюда подставляется любой URL и заголовки для отправки данных формы. Отправка протестирована и стабильна.
const options = {
    url: 'http://httpbin.org/post',
    headers: {
        //   authorization: ,
          'Content-Type': 'application/json'
        }
    };

export const api = new Api(options);


// //Тестовый АПИ для получения плейлиста
// const testTracks = {
//     url: "https://theaudiodb.p.rapidapi.com/track-top10.php?s=a-ha", 
//     headers: {
//             "x-rapidapi-key": "180d4b6064mshe91e0635eaa070cp1dee42jsn9a8834b63295",
//             "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
//         }
// }

// export const testGetRequest = new Api(testTracks);

//Получаем из API данные плейлиста. Сейчас это тестовый запрос на RapidApi, возвращает массив треков.
//Данный запрос подставляется в компонент Player, получает массив треков и сетит его в стейт:
// const [tracks, setTracks] = React.useEffect([]);

//   React.useEffect(() => {
//     testGetRequest.getTracksData()
//        .then((tracksData) => {
//          console.log(tracksData);
//          setTracks(tracksData);
//        })
//        .catch((err) => {
//           console.log(err);
//        });
//   }, []);

//Далее данные из полученного массива передаются в плейлист.
