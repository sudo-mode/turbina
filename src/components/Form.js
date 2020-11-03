import React from 'react';
import './Form.css';
import pdfUrl from '../vendor/offer.pdf';

function Form() {

    // // const [isRadioButtonChecked, setIsRadioButtonChecked] = React.useState(false);

    // const radioRef = React.createRef();
    // function handleRadioCheck() {
    //     radioRef.current.setAttribute(!checked);
    // }

    return(
        <div className="form-container">
        <form className="form" method="POST" name="send-poem" noValidate>
                <h2 className="form__heading">Форма.</h2>
                <p className="text__paragraph form__text">Заполняя эту форму, вы становитесь частью проекта.</p>

                <input className="form__input form__input_name" type="text" name="name" id="name" placeholder="Имя и фамилия автора" required minLength="2" maxLength="40" />
                {/* <span className="popup__form-error" id="name-error"></span> */}
                <input className="form__input form__input_email" type="email" name="email" id="email" placeholder="Почта" required minLength="6" maxLength="50" />
                {/* <span className="popup__form-error" id="email-error"></span> */}
                <input className="form__input form__input_tel" type="tel" name="tel" id="tel" placeholder="Телефон" required />
                {/* <span className="popup__form-error" id="phone-error"></span> */}

                <textarea className="form__textarea form__input form__input_text" name="text" minLength="50" placeholder="Стихи" required>
                </textarea>

                <label htmlFor="offer" className="form__input-label">
                  <input className="form__input_radio" type="radio" name="offer" value="agree" id="offer" required />
                  <span className="form__pseudo-item"></span>
                  {/* TODO: прикрутить оферту в пдф */}
                  <span className="form__label-text">Согласен с <a className="form__offer-link" target="_blank" href={pdfUrl}>офертой</a></span>
                </label>

                <button type="submit" className="form__submit-button"><p className="form__button-text">Отправить форму</p></button>
            </form>
      </div>
    )
}

export default Form;
