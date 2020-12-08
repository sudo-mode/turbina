import { useState, useEffect, useRef } from "react";
import cn from "classnames";
import YTPlayer from "yt-player";
import "./VideoModal.css";

function VideoModal({ videoModalData, isVideoModalOpened, onVideoModalClose }) {
  const [videoPlayer, setVideoPlayer] = useState({});

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
