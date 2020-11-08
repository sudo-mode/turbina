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
    url: 'http://httpbin.org/post',
    headers: {
        //   authorization: ,
          'Content-Type': 'application/json'
        }
    };

export const api = new Api(options);