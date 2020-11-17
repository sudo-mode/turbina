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
    const [isErrorVisible, setIsErrorVisible] = React.useState(false);
    const [isParent, setIsParent] = React.useState(true);
    const [isMusician, setIsMusician] = React.useState(false);

    const inputNameStyle = cn('form__input', 'form__input_name', {'form__input_invalid': errors.name});
    const inputTelStyle = cn('form__input', 'form__input_tel', {'form__input_invalid': errors.tel});
    const inputEmailStyle = cn('form__input', 'form__input_email', {'form__input_invalid': errors.email});
    const inputTextStyle = cn('form__textarea', 'form__input', {'form__input_invalid': errors.text});

    const isParentButtonStyle = cn('form__type-choice', {'form__type-choice_visited': isParent});
    const isMusicianButtonStyle = cn('form__type-choice', {'form__type-choice_visited': isMusician})

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(values);

        api.submitForm(values)
           .then(() => {
              setIsSubmitted(true);
              setIsErrorVisible(false);
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

    function handleIsMusicianClick() {
      setIsParent(false);
      setIsMusician(true);
    }

    function handleIsParentClick() {
      setIsParent(true);
      setIsMusician(false);
    }

    return(
        <div className="form-container">

          <h2 className="form-container__heading">Форма</h2>
          <p className="form-container__text">Заполняя эту форму, вы становитесь частью проекта.</p>


          <button className={isParentButtonStyle} onClick={handleIsParentClick}>Я родитель</button>
          <button className={isMusicianButtonStyle} onClick={handleIsMusicianClick}>Я музыкант</button>

        <form className="form" name="send-poem" onSubmit={handleSubmit} noValidate>
          
                <input 
                  className={inputNameStyle}
                  name="name" 
                  placeholder={(isParent && 'Имя и фамилия автора') || (isMusician && 'Имя и фамилия/Название группы')}
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


                {isParent && <textarea 
                  className={inputTextStyle}
                  name="text" 
                  minLength="20" 
                  placeholder="Стихи" 
                  required
                  value={values.text || ''}
                  onChange={handleChange}
                >
                </textarea>}
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


                <button type="submit" className="form__submit-button" disabled={!isFormValid}><span className="form__button-text">{isSubmitted? 'Ура, форма отправлена!' : 'Отправить форму'}</span></button>
                {isErrorVisible && <span className="form__wrong-submit">Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!</span>}
                {!isFormValid && <span className="form__fill-hint">Чтобы отправить форму, пожалуйста, заполните все поля</span>}

                <span className="form__fill-hint form__fill-hint_musician">Если вы музыкант и хотите стать частью проекта - напишите нам.</span>
                
            </form>
      </div>
    )
}

export default Form;
