import React from "react";

export default function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "I just donated clean water 🌍💧",
          text: "Join me in changing lives with Africa Access Water!",
          url: window.location.origin, 
        });
        console.log("Shared successfully!");
      } catch (err) {
        console.error("Share canceled or failed:", err);
      }
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };

  return (
    <button onClick={handleShare} className="btn btn-primary mt-3">
      Share My Donation 💧
    </button>
  );
}
