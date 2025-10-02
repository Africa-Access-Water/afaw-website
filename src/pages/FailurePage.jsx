// FailurePage.jsx
import React from "react";


export default function FailurePage() {
  return (
    <section className="position-relative text-center">
      {/* Background image */}
      <img
        src="/img/carousel-2.jpg" 
        alt="Donation failed"
        className="img-fluid w-100"
        style={{
          height: "100vh",
          objectFit: "cover",
          filter: "brightness(0.6)",
        }}
      />

      {/* Overlay content */}
      <div className="position-absolute top-50 start-50 text-white translate-middle">
        <h1 className="display-4 fw-bold text-danger">
          Payment Failed 
        </h1>
        <p className="lead">
          Unfortunately, your donation didn’t go through.  
          Please try again to help bring clean water to communities in need.
        </p>

        <div className="mt-4">
          <a href="/donate" className="btn btn-danger btn-lg me-3">
            Try Again
          </a>
          <a href="/" className="btn btn-outline-light btn-lg">
            Go Back Home
          </a>
        </div>
      </div>
    </section>
  );
}
