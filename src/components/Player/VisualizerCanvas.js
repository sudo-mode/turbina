import './VisualizerCanvas.css';
import cn from 'classnames';

function VisualizerCanvas({ isMobile, isLandscape, isPlaying, track, refanalyzerCanvas }) {
  return (
    <div className='visualizer'>
      <canvas
        className={cn('visualizer__bar',
          { 'visualizer__bar_active': !isMobile && !isLandscape && isPlaying },
          { 'visualizer__bar_active-and-theme': track.theme.backgroundImage.includes('gradient') })}
        ref={refanalyzerCanvas}
        id="analyzer">
      </canvas>
    </div>
  )
}

export default VisualizerCanvas;
