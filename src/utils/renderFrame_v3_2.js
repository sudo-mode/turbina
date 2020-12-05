export default function renderFrame(analyser, ctx, freqData, analyzerCanvas) {
  const canvas = analyzerCanvas.current;
  let w = canvas.width;
  let h = canvas.height;
  analyser.getByteFrequencyData(freqData);


  let gradient;

  

  ctx.clearRect(0, 0, w, h);
  let i = 130;

  ctx.beginPath();
  // for (let a = 0; a < 2*Math.PI;a+=4*(Math.PI/180)) {
  for (let a = 0; a < 2*Math.PI;a+=2*(Math.PI/180)) {
    let height = 10+(w/2)+Math.cos(a)*freqData[i]
    let x = (10+(w/2)+Math.cos(a)*freqData[i]);
    let y = (10+(h/2)+Math.sin(a)*freqData[i]);
    if (a === 0) {
      gradient = ctx.createRadialGradient(w/2, h/2, Math.floor(freqData[i]/3), w/2, h/2, 500);
      gradient.addColorStop(0, 'aqua');
      gradient.addColorStop(0.4, 'hotpink');
      gradient.addColorStop(1, 'red');
      ctx.moveTo(x,y);
    } else {

      ctx.lineTo(x,y);
    }
    i++;
  }
  ctx.fillStyle = gradient;
  ctx.closePath();
  ctx.fill();

  requestAnimationFrame(() => { renderFrame(analyser, ctx, freqData, analyzerCanvas) })

};
