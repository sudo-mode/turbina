import { useState, useCallback } from 'react';
import validationInfo from '../utils/validationInfo';

function useFormWithValidation(validationInfo) {
    const [values, setValues] = useState({
        name: '',
        email: '',
        tel: '',
        text: '',
        offer: false
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    function handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        const value = target.value;
        const isCheckbox = target.type === 'checkbox';

        const setCustomValidity = (target) => {
            target.setCustomValidity('');

            if (!target.validity.valid){
                 if (target.validity.valueMissing) {
                    target.setCustomValidity('Это поле обязательно');
                } else if (target.validity.tooShort) {
                    target.setCustomValidity(`Введенное значение должно быть длинее ${target.minLength} символов`);
                } else if (target.validity.tooLong) {
                    target.setCustomValidity(`Введенное значение должно быть короче ${target.maxLength} символов`)
                } else if (target.validity.patternMismatch) {
                    target.setCustomValidity('Неверное значение')
                } 
            } 
        }
            
        setCustomValidity(target);

        setValues({
            ...values,
            [name]: isCheckbox ? target.checked : value
        });

     
        setErrors({
            ...errors,
            [name]: target.validationMessage
        });


        setIsFormValid(target.closest('form').checkValidity());
    }


    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsFormValid = false) => {
          setValues(newValues);
          setErrors(newErrors);
          setIsFormValid(newIsFormValid);
        },
        [setValues, setErrors, setIsFormValid]
      );


    return { values, handleChange, errors, isFormValid, resetForm }
}

export default useFormWithValidation;