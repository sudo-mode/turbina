import React from 'react';
import './Form.css';
import pdfUrl from '../vendor/offer.pdf';
import useFormWithValidation from '../hooks/useFormWithValidation.js';
import validationInfo from '../utils/validationInfo.js';
import { api } from '../utils/Api.js';

// TODO: Отправка формы - состояние isSubmitting "Отправляем форму..."
// TODO: Таймаут, который поменяет isSubmitted обратно на false

function Form() {

    const { values, handleChange, errors, isFormValid, resetForm } = useFormWithValidation(validationInfo);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isErrorVisible, setIsErrorVisible] = React.useState(false);

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(values);

        api.submitForm(values)
           .then(() => {
              setIsSubmitted(true);
              resetForm();

              setTimeout(() => 
                setIsSubmitted(false),
                5000);
           })
           .catch((err) => {
               console.log(err);
               setIsErrorVisible(true);
           })
    }

    return(
        <div className="form-container">
        <form className="form" name="send-poem" onSubmit={handleSubmit} noValidate>
                <h2 className="form__heading">Форма</h2>
                <p className="text__paragraph form__text">Заполняя эту форму, вы становитесь частью проекта.</p>

                <input 
                  className="form__input form__input_name"
                  name="name" 
                  placeholder="Имя и фамилия автора" 
                  required 
                  minLength="2" 
                  maxLength="40" 
                  value={values.name || ''}
                  onChange={handleChange}
                />
                <span className="form__input-error" id="name-error">{errors.name || ''}</span>

                <input 
                  className="form__input form__input_email"
                  type="email" 
                  name="email" 
                  placeholder="Телефон" 
                  required 
                  minLength="6" 
                  maxLength="50" 
                  value={values.email || ''}
                  onChange={handleChange}
                />
                <span className="form__input-error" id="email-error">{errors.email || ''}</span>

                <input 
                  className="form__input form__input_tel"
                  type="tel" 
                  name="tel" 
                  placeholder="Почта" 
                  required 
                  value={values.tel || ''}
                  onChange={handleChange}
                />
                <span className="form__input-error" id="phone-error">{errors.tel || ''}</span>


                <textarea 
                  className="form__textarea form__input"
                  name="text" 
                  minLength="50" 
                  placeholder="Стихи" 
                  required
                  value={values.text || ''}
                  onChange={handleChange}
                >
                </textarea>
                <span className="form__input-error" id="text-error">{errors.text || ''}</span>

                <label htmlFor="offer" className="form__input-label">
                  <input 
                    className="form__input_radio" 
                    type="checkbox" 
                    name="offer" 
                    value="agree" 
                    id="offer"
                    required 
                    checked={values.offer}
                    onChange={handleChange}
                  />
                  <span className="form__pseudo-item"></span>
        
                  <span className="form__label-text">Согласен с <a className="form__offer-link" target="_blank" href={pdfUrl} rel="noreferrer">офертой</a></span>
                </label>
                <span className="form__input-error" id="offer-error">{errors.offer || ''}</span>


                <button type="submit" className="form__submit-button" disabled={!isFormValid}><span className="form__button-text">{isSubmitted? 'Ура, форма отправлена!' : 'Отправить форму'}</span></button>
                <span className="form__wrong-submit">{isErrorVisible? 'Упс, что-то пошло не так!' : ''}</span>
            </form>
      </div>
    )
}

export default Form;
