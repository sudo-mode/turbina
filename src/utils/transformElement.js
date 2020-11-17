/* eslint-disable no-unused-vars */
const transformElement = (evt, element, method = 'position') => { 
  // текущий размер вьюпорта
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  // вычисляем смещение относительно left/top нуля
  const x = 100 - Math.round((evt.clientX / windowWidth) * 100);
  const y = 100 - Math.round((evt.clientY / windowHeight) * 100);
  // меняем стили элемента, в зависимости от переданного метода
  switch (method) {
    case 'position':
      // ускоритель - чем меньше - тем кратно меньше смещение. НЕ УСТАНАВЛИВАТЬ
      // БОЛЬШЕ 1! - особенности реализации фона!
      const deflector = .6;
      element.style.backgroundPosition = `${x * deflector}% ${y * deflector}%`;
      break;
    case 'skew':
      // чем больше дефлектор сдвига - тем меньше смещение
      const deflectorSkew = 20;
      element.style.transform = `skew(${2.5 - (x / deflectorSkew)}deg, ${2.5 - (y / deflectorSkew)}deg)`;
      break;
    // здесь оставим возможность добавить еще трансформ-кейсы...
    default:
      return;
  }
}

export default transformElement
