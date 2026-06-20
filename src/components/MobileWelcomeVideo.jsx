// src/components/MobileWelcomeVideo.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "afaw_intro_video_seen";
const FOURTEEN_DAYS = 14 * 24 * 60 * 60 * 1000;

export default function MobileWelcomeVideo({
  forceShow = true,
  onClose = null,
}) {
  const videoRef = useRef(null);

  const [visible, setVisible] = useState(() => {
  if (forceShow) return true;

  const isMobile = window.innerWidth <= 768;

  if (!isMobile) return false;

  const lastSeen = localStorage.getItem(STORAGE_KEY);

  if (!lastSeen) return true;

  return (
    Date.now() - parseInt(lastSeen, 10) >
    FOURTEEN_DAYS
  );
});
  const [showControls, setShowControls] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setShowControls(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [visible]);

  const closeVideo = () => {
    localStorage.setItem(
      STORAGE_KEY,
      Date.now().toString()
    );

    setVisible(false);

    if (onClose) {
      onClose();
    }
  };

  const enableSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = false;
    videoRef.current.volume = 1;

    setSoundEnabled(true);

    videoRef.current.play().catch(() => {});
  };

  if (!visible) return null;

  return (
    <div className="video-overlay">

      <video
        ref={videoRef}
        className="video-player"
        autoPlay
        muted
        playsInline
        poster="/videos/welcome-poster.png"
        onEnded={() => setVideoEnded(true)}
      >
        <source
          src="/videos/welcome.mp4"
          type="video/mp4"
        />
      </video>

      {!videoEnded && showControls && (
        <div className="video-buttons">

          {!soundEnabled && (
            <button
              className="btn btn-warning"
              onClick={enableSound}
            >
              🔊 Enable Sound
            </button>
          )}

          <button
            className="btn btn-light"
            onClick={closeVideo}
          >
            Skip
          </button>

        </div>
      )}

      {videoEnded && (
        <div className="video-end-screen">

          <h2 className="mb-3">
            Help Bring Clean Water to More Communities
          </h2>

          <p className="mb-4">
            Learn more about our impact or support a
            solar-powered water project today.
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center">

            <Link
              to="/about"
              className="btn btn-light video-cta-btn"
              onClick={closeVideo}
            >
              Learn More
            </Link>

            <Link
              to="/donate"
              className="btn btn-primary btn btn-primary video-cta-btn"
              onClick={closeVideo}
            >
              Donate
            </Link>

            <button
              className="btn btn-secondary video-cta-btn"
              onClick={closeVideo}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}