function formatDuration(duration) {
  // --- Страховка на случай отсчёта времени, оставшегося до конца трека ---
  // При запуске трека после загрузки страницы первый раз audio.duration
  // не успевает правильно загрузиться и audio.currentTime превышает 
  // audio.duration, из-за чего в функцию formatDuration попадает 
  // отрицательное значение.
  if (duration <= 0) {
    return '0:00'
  }

  let minutes = Math.floor(duration/60);
  let seconds = Math.floor(duration % 60);
  if (seconds < 10) {seconds = '0'+seconds;}
  return `${minutes}:${seconds}`;
}

export default formatDuration;
