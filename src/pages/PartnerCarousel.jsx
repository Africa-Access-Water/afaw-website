import React, { useEffect, useState } from "react";

const PartnerCarousel = () => {
  const logos = [
    "/img/partners/3.png",
    "/img/partners/4.png",
    "/img/partners/5.png",
    "/img/partners/nmf.png",
    "/img/partners/7.png",
    "/img/partners/8.png",
    "/img/partners/cej.jfif",
    "/img/partners/10.png",
    "/img/partners/stripe.png",
  ];

  const allLogos = [...logos, ...logos];

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Inject keyframes directly */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "scrollLeft 40s linear infinite",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {allLogos.map((logo, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 20px",
              minWidth: "150px",
              padding: "10px",
            }}
          >
            <img
              src={logo}
              alt={`Partner ${index}`}
              style={{
                maxHeight: "160px",
                objectFit: "contain",
                // filter: "grayscale(100%)",
                transition: "0.3s",
                backgroundColor: "#fff",
                padding: "10px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
              // onMouseLeave={(e) =>
              //   // (e.currentTarget.style.filter = "grayscale(100%)")
              // }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;