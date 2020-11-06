export default function validationInfo(values) {
    let errors = {};

    if(!values.name.trim()) {
        errors.name = "Это поле обязательно";
    } else if (values.name.length < 2) {
        errors.name = "Имя и фамилия должны быть длинее 2 символов"
    } 

    if(!values.email) {
        errors.email= "Это поле обязательно";
    } else if (!values.email.test(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
        errors.email = "Неверный Email"
    } 

    if(!values.tel) {
        errors.tel= "Это поле обязательно";
    } else if (values.email.length < 6) {
        errors.tel = "Имя и фамилия должны быть длинее 2 символов"
    } 

    if(!values.text) {
        errors.text= "Это поле обязательно";
    } else if (values.text.length < 50) {
        errors.text = "Длина стихотворения должна быть больше 50 символов"
    } 

    if(!offer.checked) {
        errors.offer = "Это поле обязательно";
    } 



}