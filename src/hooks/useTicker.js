import { useState, useEffect } from 'react';

/*
Хук useTicker реализует бегущую строку.
Измеряет текущую ширину элемента и контейнера, определяет необходимость
появления бегущей строки и запускает её.
Реагирует на 'resize' окна браузера.
elementRef -- ссылка на элемент, который становится бегущей строкой.
containerTickerAddClass -- класс, добавляемый в список классов контейнера
      при появлении в нём бегущей строки.
dependence -- зависимость, при изменении которой снова проверяется необходимость
      появления бегущей строки.
*/
function useTicker(elementRef, containerTickerAddClass, dependence) {
  // стейт-переменнуя, определяющая необходимость бегущей строки
  const [isTickerNeeded, setTickerState] = useState(false);
  
  // Обработчик ресайза окна
  const handleResize = () => {
    const element = elementRef.current;
    const elementContainer = element.parentElement;
    const elementWidth = element.scrollWidth;
    const elementContainerWidth = elementContainer.clientWidth;
    if (elementWidth > elementContainerWidth) {
      setTickerState(true);
    } else {
      setTickerState(false);
    }
  }
  
  // Проверяем необходимость запуска бегущей строки при загрузке страницы
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleResize, [dependence]);
  
  // Добавляем слышатели на ресайз окна
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Добавляем стейт переменную для хранения текущего номера таймера
  const [intervalId, setIntervalId] = useState(null);
  
  // TODO -- можно КАК-ТО использовать для паузы в бегущей строке
  // // Функция задержки
  // const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

  // При изменении isTickerNeeded запускаем или останавливаем бегущую строку
  useEffect(() => {
    const element = elementRef.current;
    const elementContainer = element.parentElement;
    const elementWidth = element.scrollWidth;
    const elementContainerWidth = elementContainer.clientWidth;
  
    const startTicker = () => {
      // TODO -- пауза
      currentX--;
      element.style.left = `${currentX}px`;
      if (currentX === -elementWidth) {
        // 10 здесь устанавливает "задержку" в пикселях переде появлением строки справа
        currentX = elementContainerWidth + 10;
      }
    }
  
    let currentX = 0;
    
    if (isTickerNeeded) {
      elementContainer.classList.add(containerTickerAddClass);
      const currentIntervalId = setInterval(startTicker, 10);
      setIntervalId(currentIntervalId)
    } else {
      elementContainer.classList.remove(containerTickerAddClass);
      clearInterval(intervalId);
      element.style.left = '0px';
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTickerNeeded]);
}

export default useTicker;
