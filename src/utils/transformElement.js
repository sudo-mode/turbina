/* eslint-disable no-unused-vars */
const transformElement = (evt, element, method = 'position') => { 
  // текущий размер вьюпорта
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  // вычисляем смещение относительно left/top нуля
  const x = 100 - Math.round((evt.clientX / windowWidth) * 100);
  const y = 100 - Math.round((evt.clientY / windowHeight) * 100);
  // ускоритель - чем меньше - тем кратно меньше смещение. НЕ УСТАНАВЛИВАТЬ
  // БОЛЬШЕ 1! - особенности реализации фона!
  const deflector = 1;
  element.style.backgroundPosition = `${x * deflector}% ${y * deflector}%`;
}

export default transformElement
