import './Info.css';
import TextContainer from './TextContainer.js';

function Info () {
  return (
    <section className="info-container">

      {/* TODO: Выделить два компонента - текст и форму */}

      <TextContainer />

      {/* TODO: После получения ответа от дизайнера сверстать: активную радиокнопку, ховер кнопки сабмита, фокус инпутов, ошибки валидации */}

      <div className="form-container">
        <form className="form" method="POST" name="send-poem" noValidate>
                <h2 className="form__heading">Форма</h2>

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
                  <span className="form__label-text">Согласен с <a className="form__offer-link" href="#">офертой</a></span>
                </label>

                <button type="submit" className="form__submit-button">Отправить</button>
            </form>
      </div>
  
    </section>
  )
}

export default Info;
