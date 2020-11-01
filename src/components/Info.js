import './Info.css';

function Info () {
  return (
    <section className="info-container">

      {/* TODO: Выделить два компонента - текст и форму */}

      <div className="text">
      <h2 className="text__heading">О проекте</h2>
        <p className="text__paragraph">
          Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося творческого процесса. Мы видим это, когда ребёнок что-то напевает, когда он бесконечно рисует, когда придумывает истории, когда разговаривает с едой и игрушками — дети постоянно включены и что-то изобретают. Родители часто недооценивают это спонтанное творчество ребёнка. Это не плохо, просто мы привыкаем к этому. Давайте попробуем внимательнее присмотреться к нашим детям.
        </p>
        <p className="text__paragraph">
          Мы запускаем проект «ТУРБИНА», который открывает работу настоящего музыкального лейбла на базе «Маршака». В рамках «ТУРБИНЫ» лучшие современные инди-музыканты пишут свои песни на стихи, написанные детьми. Здесь важно — мы не заставляем наших детей садиться и писать поэзию, мы говорим о том, что родителям стоит быть более внимательными и чуткими к своим детям. Именно так мы сможем получить тексты, которые перестанут быть детскими, не будут осмыслены как взрослые — поэзия, которая сокращает дистанцию между взрослостью и детством, где спонтанное детское творчество и бессознательное, замеченное родителем, становится общественным культурным достоянием.
        </p>
        <h2 className="text__heading">Как это работает</h2>
        <p className="text__paragraph">
          Вы можете прислать нам тексты, родившиеся у ваших детей, которые вы записали и считаете, что это сильное высказывание. Мы собираем пул таких текстов и передаём их музыкантам. Артисты создают музыку на эти стихи. Мы продюсируем выпуск трека, возможно съёмки клипа и так далее. Мы всегда указываем автора стихотворений внутри релиза: Хадн Дадн feat. Варя Карпова и Федя Быстров — Контур.
        </p>
        <h2 className="text__heading">Тезисы</h2>
        <ul className="text__list text__paragraph">
          <li className="text__list-item">
            — Дети никогда не прекращают творить и круто стараться быть на них похожими в этом
          </li>
          <li className="text__list-item">
            — Детское бессознательное помогает родителям понять, что происходит внутри семьи
          </li>
          <li className="text__list-item">
            — Не существует детской и взрослой поэзии. Существует мысль и чувство, зафиксированное в ней
          </li>
          <li className="text__list-item">
              — Дети получают невероятное удовольствие и мотивацию от того, что их творчество востребовано сверстниками и взрослыми.
          </li>
        </ul>
      </div>

      {/* TODO: После получения ответа от дизайнера сверстать: активную радиокнопку, ховер кнопки сабмита, фокус инпутов, ошибки валидации */}

      <div className="form-container">
        <form className="form" method="POST" name="send-poem" noValidate>
                <h2 className="form__heading">Форма</h2>

                <input className="form__input form__input_name" type="text" name="name" id="name" placeholder="Имя и фамилия автора" required minLength="2" maxLength="40" />
                {/* <span className="popup__form-error" id="name-error"></span> */}
                <input className="form__input form__input_email" type="email" name="email" id="email" placeholder="Почта" required minLength="6" maxLength="50" />
                {/* <span className="popup__form-error" id="email-error"></span> */}
                <input className="form__input form__input_tel" type="tel" name="tel" id="tel" placeholder="Телефон" required />
                {/* <span className="popup__form-error" id="phone-error"></span> */}

                <textarea className="form__textarea form__input form__input_text" name="text" minLength="50" placeholder="Стихи" required>
                </textarea>

                <label htmlFor="offer" className="form__input-label">
                  <input className="form__input_radio" type="radio" name="offer" value="agree" id="offer" required />
                  <span className="form__pseudo-item"></span>
                  {/* TODO: прикрутить оферту в пдф */}
                  <span className="form__label-text">Согласен с <a className="form__offer-link" href="#">офертой</a></span>
                </label>

                <button type="submit" className="form__submit-button">Отправить</button>
            </form>
      </div>
  
    </section>
  )
}

export default Info;
