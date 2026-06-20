// src/components/WatchOurStoryCard.jsx

import React, { useState } from "react";
import MobileWelcomeVideo from "./MobileWelcomeVideo";

export default function WatchOurStoryCard() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="container py-4">

        <div className="card shadow-sm border-0">

          <div className="card-body text-center">

            <h4 className="mb-2">
              ▶ Watch Our Story
            </h4>

            <p className="mb-3">
                Discover how solar-powered water systems are helping
                communities access clean water, grow food and create
                sustainable livelihoods.
            </p>
            
            <button
              className="btn btn-primary watch-story-card"
              onClick={() => setShowVideo(true)}
            >
              Watch Video
            </button>

          </div>

        </div>

      </div>

      {showVideo && (
        <MobileWelcomeVideo
          forceShow={true}
          onClose={() => setShowVideo(false)}
        />
      )}
    </>
  );
}