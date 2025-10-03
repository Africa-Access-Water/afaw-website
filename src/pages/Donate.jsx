import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Header from "../components/Header";
import CONFIG from "../config";

const API_BASE = CONFIG.apiBaseUrl;

const Donate = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("1");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationType, setDonationType] = useState("");

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`);
        const data = await res.json();
        if (Array.isArray(data)) setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  // Update selectedProject whenever selectedProjectId changes
  useEffect(() => {
    const proj = projects.find((p) => String(p.id) === selectedProjectId);
    setSelectedProject(proj || null);
    setCurrentMediaIndex(0); // Reset slider
  }, [selectedProjectId, projects]);

  const handleProjectChange = (e) => {
    setSelectedProjectId(e.target.value);
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setShowCustom(false);
  };

  const handleCustomAmountClick = () => {
    setShowCustom(true);
    setSelectedAmount(null);
  };

  const handlePrevMedia = () => {
    const total = [
      ...(selectedProject?.cover_image ? [selectedProject.cover_image] : []),
      ...(selectedProject?.media || []),
    ].length;
    setCurrentMediaIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNextMedia = () => {
    const total = [
      ...(selectedProject?.cover_image ? [selectedProject.cover_image] : []),
      ...(selectedProject?.media || []),
    ].length;
    setCurrentMediaIndex((prev) => (prev + 1) % total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const endpoint =
        data.donation_type === "recurring"
          ? `${API_BASE}/api/donations/subscribe`
          : `${API_BASE}/api/donations/donate`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.donor_name,
          email: data.donor_email,
          project_id: data.project_id,
          amount: showCustom ? customAmount : selectedAmount,
          currency: data.currency,
          donation_type: data.donation_type,
          interval: data.interval,
          recurring: data.donation_type === "recurring",
        }),
      });

      const json = await res.json();
      if (json.url) window.location.href = json.url;
      else alert("Error creating donation session. Please try again.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset custom amount if preset selected
  useEffect(() => {
    if (!showCustom) setCustomAmount("");
  }, [showCustom]);

  return (
    <>
      <Helmet>
        <title>Donate | Africa Access Water</title>
        <meta
          name="description"
          content="Support our clean water projects through your generous donations."
        />
        <meta property="og:title" content="Donate to Africa Access Water" />
        <meta
          property="og:description"
          content="Your support brings clean, safe water to those in need."
        />
        <meta property="og:image" content="/images/og-donate.jpg" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <Layout>
        <Header title="Donate" current="donate" />

        <div
          className="container-fluid donate my-5 py-5"
          style={{
            backgroundImage: `url('img/pipe.jpg')`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <div className="container py-5">
            <div className="row g-5 align-items-start">
              {/* Left Side Text */}
              <div className="col-lg-6 h-100 bg-white p-5 rounded shadow-sm">
                {selectedProjectId === "1" || !selectedProject ? (
                  <>
                    {/* Title */}
                    <h1 className="fw-bold mb-4 text-dark">
                      Join Us in{" "}
                      <span className="text-primary">Making a Difference</span>
                    </h1>

                    {/* Intro */}
                    <p className="text-muted mb-4">
                      Two sites in <strong>Mphande</strong> and{" "}
                      <strong>Rufunsa</strong> communities have been earmarked
                      to install solar-powered water systems for productive use—
                      year-round irrigation, drinking, and livestock. These will
                      benefit <strong>2,300+ people</strong> and{" "}
                      <strong>1,000 animals</strong>.
                    </p>

                    {/* Goal Highlight */}
                    <div className="alert alert-primary rounded-pill px-4 py-2 mb-4 d-inline-block shadow-sm w-100 text-center">
                      <i className="bi bi-flag me-2"></i>
                      <strong>We are raising US$93,000</strong>
                    </div>

                    {/* Supporting Text */}
                    <p className="mb-3">
                      Your contribution helps fund{" "}
                      <strong>sustainable infrastructure</strong> and builds{" "}
                      <strong>long-term food security</strong>.
                    </p>
                    <p className="mb-4">
                      All donations are securely processed via{" "}
                      <strong>Stripe & DPO Group</strong>. Thank you for
                      empowering change.
                    </p>
                  </>
                ) : (
                  <>
                    {/* Project Info */}

                    <div className="bg-light rounded p-4 shadow-sm mb-4">
                      {selectedProject.category && (
                        <p className="mb-3 bg-primary text-white text-center">
                          <strong>{selectedProject.category}</strong>
                        </p>
                      )}

                      <h2 className="fw-bold mb-3 text-primary">
                        {selectedProject.name}
                      </h2>

                      <p className="text-muted mb-4">
                        {selectedProject.description}
                      </p>

                      {/* Project Slider */}
                      {selectedProject &&
                        [
                          ...(selectedProject.cover_image
                            ? [selectedProject.cover_image]
                            : []),
                          ...(selectedProject.media || []),
                        ].length > 0 && (
                          <div className="mb-4">
                            <div
                              id={`modal-carousel-${selectedProject.id}`}
                              className="carousel slide"
                              data-bs-ride="carousel"
                            >
                              {/* Main Images */}
                              <div className="carousel-inner rounded overflow-hidden shadow-sm">
                                {[
                                  ...(selectedProject.cover_image
                                    ? [selectedProject.cover_image]
                                    : []),
                                  ...(selectedProject.media || []),
                                ].map((url, idx) => (
                                  <div
                                    key={idx}
                                    className={`carousel-item ${
                                      idx === currentMediaIndex ? "active" : ""
                                    }`}
                                  >
                                    <img
                                      src={url}
                                      alt={`media-${idx}`}
                                      className="d-block w-100"
                                      style={{
                                        height: "320px",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>

                              {/* Controls */}
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target={`#modal-carousel-${selectedProject.id}`}
                                data-bs-slide="prev"
                                onClick={handlePrevMedia}
                              >
                                <span className="carousel-control-prev-icon"></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target={`#modal-carousel-${selectedProject.id}`}
                                data-bs-slide="next"
                                onClick={handleNextMedia}
                              >
                                <span className="carousel-control-next-icon"></span>
                                <span className="visually-hidden">Next</span>
                              </button>

                              {/* Thumbnails */}
                              <div className="d-flex justify-content-center mt-2 gap-2 flex-wrap">
                                {[
                                  ...(selectedProject.cover_image
                                    ? [selectedProject.cover_image]
                                    : []),
                                  ...(selectedProject.media || []),
                                ].map((url, idx) => (
                                  <img
                                    key={idx}
                                    src={url}
                                    alt={`thumb-${idx}`}
                                    className={`img-thumbnail ${
                                      idx === currentMediaIndex
                                        ? "border-primary"
                                        : ""
                                    }`}
                                    style={{
                                      width: "60px",
                                      height: "60px",
                                      objectFit: "cover",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => setCurrentMediaIndex(idx)}
                                    data-bs-target={`#modal-carousel-${selectedProject.id}`}
                                    data-bs-slide-to={idx}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                      {selectedProject.donation_goal !== undefined &&
                        selectedProject.donation_raised !== undefined && (
                          <div className="causes-progress bg-white border rounded p-3">
                            <div className="d-flex justify-content-between mb-2">
                              <span className="fw-semibold text-dark">
                                Goal: $
                                {selectedProject.donation_goal.toLocaleString()}
                              </span>
                              <span className="fw-semibold text-success">
                                Raised: $
                                {selectedProject.donation_raised.toLocaleString()}
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div
                              className="progress"
                              style={{ height: "20px" }}
                            >
                              <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar"
                                style={{
                                  width: `${
                                    (selectedProject.donation_raised /
                                      selectedProject.donation_goal) *
                                    100
                                  }%`,
                                }}
                                aria-valuenow={
                                  (selectedProject.donation_raised /
                                    selectedProject.donation_goal) *
                                  100
                                }
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                {Math.round(
                                  (selectedProject.donation_raised /
                                    selectedProject.donation_goal) *
                                    100
                                )}
                                %
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  </>
                )}
              </div>

              {/* Right Side Form + Slider */}
              <div className="col-lg-6">
                <div className="h-100 bg-white p-5 rounded shadow-sm text-center">
                  {/* Logo */}
                  <Link to="/" className="d-flex justify-content-center mb-4">
                    <img
                      src="/img/logos/afaw-logo-black.png"
                      alt="afaw-logo-africa"
                      className="img-fluid"
                      style={{ width: "40px", height: "auto" }}
                    />
                  </Link>

                  {/* Tag */}
                  <div className="d-inline-block rounded-pill bg-primary text-white py-2 px-4 mb-4 shadow-sm">
                    <i className="bi bi-heart-fill me-2"></i> Support Our Cause
                  </div>

                  {/* Donation Form */}
                  <form onSubmit={handleSubmit} className="text-start">
                    {/* Full Name */}
                    <div className="form-group mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          name="donor_name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          name="donor_email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>

                    {/* Project Dropdown */}
                    <div className="form-group mb-3">
                      <select
                        name="project_id"
                        className="form-select"
                        value={selectedProjectId}
                        onChange={handleProjectChange}
                        required
                      >
                        <option value="1">General Donation</option>
                        {projects
                          .filter((p) => String(p.id) !== "1")
                          .map((project) => (
                            <option key={project.id} value={project.id}>
                              {project.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Donation Type + Currency */}
                    <div className="form-group row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <select
                          name="donation_type"
                          className="form-select"
                          value={donationType}
                          onChange={(e) => setDonationType(e.target.value)}
                          required
                        >
                          <option value="">Donation Type</option>
                          <option value="one_time">One Time</option>
                          <option value="recurring" disabled>Recurring</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <select
                          name="currency"
                          className="form-select"
                          defaultValue="USD"
                          required
                        >
                          <option value="USD">USD</option>
                        </select>
                      </div>
                    </div>

                    {/* Recurring Interval */}
                    {donationType === "recurring" && (
                      <div className="form-group mb-3">
                        <select
                          name="interval"
                          className="form-select"
                          required
                        >
                          <option value="">Select Interval</option>
                          <option value="day">Daily</option>
                          <option value="week">Weekly</option>
                          <option value="month">Monthly</option>
                          <option value="year">Yearly</option>
                        </select>
                      </div>
                    )}

                    {/* Amount */}
                    <div className="form-group mb-4">
                      <label className="form-label fw-semibold">
                        Select Donation Amount
                      </label>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        {[10, 30, 50, 100].map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            className={`btn btn-outline-primary ${
                              selectedAmount === String(amount) ? "active" : ""
                            }`}
                            onClick={() => handleAmountClick(String(amount))}
                          >
                            ${amount}
                          </button>
                        ))}
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={handleCustomAmountClick}
                        >
                          Other
                        </button>
                      </div>
                      {showCustom && (
                        <input
                          type="number"
                          min="1"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="form-control mt-2"
                          placeholder="Enter custom amount"
                          required
                        />
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 shadow-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                          ></span>
                          Processing...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-cash-stack me-2"></i> Donate Now
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Donate;
