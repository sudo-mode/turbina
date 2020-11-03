import { useState, useEffect } from 'react';

function useFormWithValidation() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        tel: '',
        text: ''
    });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    function handleChange(evt) {
        const target = evt.target;
        const name = target.name;
        const value = target.value;

        setValues({
            ...values,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: target.validationMessage 
        });
        setIsValid(target.closest('form').checkValidity());

    }

    return { values, handleChange, errors, isValid }
}

export default useFormWithValidation;