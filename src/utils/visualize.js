import renderFrame from './renderFrame'

function visualize(audioPlayerRef, isMobile, analyzerCanvas, setAudioCtx) {
  try {

    if (!audioPlayerRef.current.src.startsWith(window.location.href)) {
      throw new Error('AudioContext отключен',
        'текущий адрес: ', window.location.href,
        'адрес трека: ', audioPlayerRef.current.src);
    }

    if (!isMobile) {
      const context = new AudioContext();
      const audio = audioPlayerRef.current;
      const audioSrc = context.createMediaElementSource(audio);
      const analyser = context.createAnalyser();
      const canvas = analyzerCanvas.current;
      const ctx = canvas.getContext('2d');
      const freqData = new Uint8Array(analyser.frequencyBinCount);
      audioSrc
        .connect(analyser)
        .connect(context.destination);
      analyser.connect(context.destination);
      setAudioCtx(context);
      renderFrame(analyser, ctx, freqData, analyzerCanvas);
    }
  } catch (e) {
    return
  }
}

export default visualize;