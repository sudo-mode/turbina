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


        setValues({
            ...values,
            [name]: isCheckbox ? target.checked : value
        });

    const setCustomValidity = (target) => {
        if (!target.validity.valid){
             if (target.validity.valueMissing) {
                target.setCustomValidity('This is required');
            } else if (target.validity.tooShort) {
                target.setCustomValidity('Value should be longer')
            } 
        } else {
            target.setCustomValidity('')
        }
    }
        
        setCustomValidity(target);

        //Старый код с браузерными ошибками
        setErrors({
            ...errors,
            [name]: target.validationMessage
        });

        setIsFormValid(target.closest('form').checkValidity());
    }

    // function handleNameChange(evt) {
    //     setValues({
    //         ...values,
    //         [evt.target.name]: evt.target.value
    //     })

    //     if (evt.target.validity.valueMissing) {
    //         evt.target.setCustomValidity("It is required"); 
    //       } else {
    //         evt.target.setCustomValidity("");
    //       }
    // }

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