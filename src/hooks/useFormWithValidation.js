import { useState } from 'react';

function useFormWithValidation() {
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
        
        setErrors({
            ...errors,
            [name]: target.validationMessage 
        });
     
        setIsFormValid(target.closest('form').checkValidity());

        // TODO: НАПИСАТЬ РЕСЕТ ФОРМЫ

    }

    return { values, handleChange, errors, isFormValid }
}

export default useFormWithValidation;