import React from "react";

const WorkInProgress = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center bg-light px-3">
      {/* Logo */}
      <div className="mb-4">
        <img
          src="/img/logos/afaw-logo-africa.png"
          alt="Africa Access Water Logo"
          className="img-fluid"
          style={{ maxHeight: "60px" }}
        />
      </div>

      {/* WIP Text */}
      <h1 className="display-1 fw-bold text-warning">🚧</h1>
      <h2 className="h4 fw-semibold text-dark mt-3">Work in Progress</h2>
      <p className="text-muted mt-2 mx-auto" style={{ maxWidth: "500px" }}>
        This page is currently under construction.  
        <br />
        We’re working hard to bring you fresh updates and meaningful impact.  
        Please check back soon and continue supporting the mission for clean water.
      </p>

      {/* Buttons */}
      <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
        <a href="/" className="btn btn-primary px-4 py-2 fw-semibold shadow-sm">
          Back to Home
        </a>
        <a
          href="/donate"
          className="btn btn-outline-primary px-4 py-2 fw-semibold shadow-sm"
        >
          Support Our Work
        </a>
      </div>

      {/* Decorative Wave */}
      <div className="mt-5 w-100" style={{ maxWidth: "600px" }}>
        <svg
          viewBox="0 0 600 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-100 text-warning opacity-25"
          style={{ height: "80px" }}
        >
          <path
            d="M0,100 C150,200 450,0 600,100 L600,200 L0,200 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default WorkInProgress;
