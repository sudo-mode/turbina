export default function renderFrame(analyser, ctx, freqData, analyzerCanvas) {
  const canvas = analyzerCanvas.current;
  requestAnimationFrame(() => { renderFrame(analyser, ctx, freqData, analyzerCanvas) });
  analyser.getByteFrequencyData(freqData);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rgb1 = `rgb(${freqData[20]},${freqData[40]},${freqData[80]})`;
  const rgb2 = `rgb(${freqData[30]},${freqData[50]},${freqData[70]})`;

  const my_gradient = ctx.createLinearGradient(0, 0, 0, freqData[0]);
  my_gradient.addColorStop(0, rgb1);
  my_gradient.addColorStop(1, rgb2);

  ctx.fillStyle = my_gradient;

  const bars = 99;
  for (var i = 0; i < bars; i++) {
    let bar_x = 2 + i * 3;
    let bar_width = 2;
    let bar_height = -(freqData[i] / 2);
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
  }
};
