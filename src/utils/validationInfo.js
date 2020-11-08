// ЗДЕСЬ БУДУТ КАСТОМНЫЕ ОШИБКИ
export default function validationInfo(target) {
    if(target.validity.valueMissing) {
        target.setCustomValidity('Это поле обязательно')
    }
}