// Класс для получения данных с сервера и отправки данных формы.
// В option подставляется адрес сервера, токен для авторизации, тип контента

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

    //POST запрос отправки формы
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


const options = {
    url: 'https://jsonplaceholder.typicode.com/posts',
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