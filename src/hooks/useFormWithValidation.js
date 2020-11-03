import { useState, useCallback } from 'react';

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

        // const resetForm = useCallback(
        //     (newValues = {}, newErrors = {}, newIsValid = false) => {
        //         setValues(newValues);
        //         setErrors(newErrors);
        //         setIsValid(newIsValid);
        //     },
        //     [setValues, setErrors, setIsValid]
        // );

    }

    return { values, handleChange, errors, isValid }
}

export default useFormWithValidation;