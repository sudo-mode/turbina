import './Info.css';
import TextContainer from './TextContainer.js';
import Form from './Form.js';

function Info () {
  return (
    <section className="info-container">

      {/* TODO: Выделить два компонента - текст и форму */}

      <TextContainer />

      {/* TODO: После получения ответа от дизайнера сверстать: активную радиокнопку, ховер кнопки сабмита, фокус инпутов, ошибки валидации */}

      <Form />
      
  
    </section>
  )
}

export default Info;
