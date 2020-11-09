// ЗДЕСЬ БУДУТ КАСТОМНЫЕ ОШИБКИ; этот вариант не работает. Попробовать чере setCustomValidity
    export default function setCustomValidity (target) {
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

  