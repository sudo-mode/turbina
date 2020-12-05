// import renderFrame from './renderFrame_v3_2';
import Vudio from 'vudio.js';

function visualize(audioPlayerRef, isMobile, analyzerCanvas, setAudioCtx, isPlaying) {
  try {

    if (!audioPlayerRef.current.src.startsWith(window.location.href)) {
      throw new Error('AudioContext отключен',
        'текущий адрес: ', window.location.href,
        'адрес трека: ', audioPlayerRef.current.src);
    }

    if (!isMobile) {
      // const context = new AudioContext();
      const audio = audioPlayerRef.current;
      // const audioSrc = context.createMediaElementSource(audio);
      // const analyser = context.createAnalyser();
      const canvas = analyzerCanvas.current;
      // const ctx = canvas.getContext('2d');
      // const freqData = new Uint8Array(analyser.frequencyBinCount);
      // audioSrc
      //   .connect(analyser)
      //   .connect(context.destination);
      // analyser.connect(context.destination);
      // setAudioCtx(context);


      var vudio = new Vudio(audio, canvas, {
        effect: 'lighting', // 当前只有'waveform'这一个效果，哈哈哈
        accuracy: 128, // 精度,实际表现为波形柱的个数，范围16-16348，必须为2的N次方
        width: 530, // canvas宽度，会覆盖canvas标签中定义的宽度
        height: 530, // canvas高度，会覆盖canvas标签中定义的高度






      }
      
      
      );


      // renderFrame(analyser, ctx, freqData, analyzerCanvas);
    }
    vudio.dance()


  } catch (e) {
    return
  }
}

export default visualize;