import { useState, useEffect, useRef } from "react";
import cn from "classnames";
import YTPlayer from "yt-player";
import "./VideoModal.css";
import useWindowSize from "../hooks/useWindowResize";

function VideoModal({ videoModalData, isVideoModalOpened, onVideoModalClose }) {
  const [videoPlayer, setVideoPlayer] = useState({});

  const windowSize = useWindowSize();
  const modalContentRef = useRef();
  const iframeRef = useRef();

  const handleVideoModalClose = () => {
    onVideoModalClose();
    videoPlayer.pause();
  };

  useEffect(() => {
    if (isVideoModalOpened) {
      videoPlayer.load(videoModalData.youtubeId);
    }
  }, [isVideoModalOpened]);

  useEffect(() => {
    setVideoPlayer(new YTPlayer("#video-player"));
  }, []);

  // Формула рассчета подходящего процента соотношения высоты и ширины для адаптивного iframe
  // buttonSpace - запас высоты под контейнером с контентом, при котором в экран умещается кнопка "Закрыть"
  const calcIframeRatio = () => {
    if (modalContentRef.current) {
      const modalContentHeight = modalContentRef.current?.clientHeight;
      if (modalContentHeight) {
        const buttonSpace = (windowSize.height - modalContentHeight) / 2;
        if (buttonSpace < 80 + 20) {
          const iframeHeight =
            modalContentHeight - iframeRef.current.clientHeight;
          const ratio =
            (windowSize.height - iframeHeight - 2 * 80) * 100 /
            iframeRef.current.clientWidth;
          if (ratio > 56) {
            return 56;
          }
          return ratio;
        }
      }
    }
    return 56;
  };

  return (
    <div
      className={cn("modal", {
        "modal_opened": isVideoModalOpened,
      })}
    >
      <div className="modal__content" ref={modalContentRef}>
        <h2 className="modal__title">{videoModalData.title}</h2>
        <div
          className="modal__iframe-container"
          style={{ paddingBottom: `${calcIframeRatio()}%` }}
        >
          <iframe
            id="video-player"
            className="modal__iframe"
            src={
              videoModalData.src ? `${videoModalData.src}?enablejsapi=1` : ""
            }
            title="YouTube"
            allowFullScreen
            ref={iframeRef}
          ></iframe>
        </div>
        <button
          className="modal__close-button"
          type="button"
          onClick={handleVideoModalClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default VideoModal;
