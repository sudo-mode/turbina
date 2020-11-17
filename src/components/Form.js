import React from 'react';
import './Form.css';
import cn from 'classnames';
import pdfUrl from '../vendor/offer.pdf';
import useFormWithValidation from '../hooks/useFormWithValidation.js';
import setCustomValidity from '../utils/setCustomValidity.js';
import { api } from '../utils/Api.js';



function Form() {

    const { values, handleChange, errors, isFormValid, resetForm } = useFormWithValidation(setCustomValidity);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isErrorVisible, setIsErrorVisible] = React.useState(false);

    const inputNameStyle = cn('form__input', 'form__input_name', {'form__input_invalid': errors.name});
    const inputTelStyle = cn('form__input', 'form__input_tel', {'form__input_invalid': errors.tel});
    const inputEmailStyle = cn('form__input', 'form__input_email', {'form__input_invalid': errors.email});
    const inputTextStyle = cn('form__textarea', 'form__input', {'form__input_invalid': errors.text});


    function handleSubmit(evt) {
        evt.preventDefault();
        setIsSubmitted(true);

        api.submitForm(values)
           .then(() => {
              setIsSuccess(true);
              setIsSubmitted(false);
              setIsErrorVisible(false);
              resetForm();

              setTimeout(() => 
                setIsSuccess(false),
                5000
              );
           })
           .catch((err) => {
               console.log(err);
               setIsSubmitted(false);
               setIsErrorVisible(true);
           })
    }

    return(
        <div className="form-container">

          <h2 className="form-container__heading">Форма</h2>
          <p className="form-container__text">Заполняя эту форму, вы становитесь частью проекта.</p>

        <form className="form" name="send-poem" onSubmit={handleSubmit} noValidate>

                <input 
                  className={inputNameStyle}
                  name="name" 
                  placeholder="Имя и фамилия автора" 
                  required 
                  minLength="2" 
                  maxLength="50" 
                  pattern="^[A-Za-zА-Яа-яёЁ\s\-]+$"
                  value={values.name || ''}
                  onChange={handleChange}
                />
                {errors.name && <span className="form__input-error">{errors.name}</span>}

                <input 
                  className={inputTelStyle}
                  type="tel" 
                  name="tel" 
                  placeholder="Телефон" 
                  required
                  minLength="10"
                  maxLength="20"
                  pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                  value={values.tel || ''}
                  onChange={handleChange}
                />
               {errors.tel && <span className="form__input-error">{errors.tel}</span>}

                <input 
                  className={inputEmailStyle}
                  type="email" 
                  name="email" 
                  placeholder="Почта" 
                  required 
                  minLength="6" 
                  maxLength="50" 
                  pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                  value={values.email || ''}
                  onChange={handleChange}
                />
                {errors.email && <span className="form__input-error">{errors.email}</span>}


                <textarea 
                  className={inputTextStyle}
                  name="text"
                  placeholder="Стихи" 
                  required
                  value={values.text || ''}
                  onChange={handleChange}
                >
                </textarea>
                {errors.text && <span className="form__input-error">{errors.text}</span>}

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
                {errors.offer && <span className="form__input-error">{errors.offer}</span>}


                <button type="submit" className="form__submit-button" disabled={!isFormValid}>
                  <span className="form__button-text">
                    {isSubmitted ? 'Отправляем...' : isSuccess ? 'Ура, форма отправлена!' : 'Отправить форму'}
                  </span>
                </button>
                {isErrorVisible && <span className="form__wrong-submit">Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!</span>}
                {!isFormValid && <span className="form__fill-hint">Чтобы отправить форму, пожалуйста, заполните все поля</span>}
                
            </form>
      </div>
    )
}

export default Form;
