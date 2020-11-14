function formatDuration(duration) {
  let minutes = Math.floor(duration/60);
  let seconds = Math.floor(duration % 60);
  if (seconds < 10) {seconds = '0'+seconds;}
  return `${minutes}:${seconds}`;
}

export default formatDuration;
