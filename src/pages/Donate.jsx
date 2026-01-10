import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import CONFIG from "../config";
import { extractIdFromSlug, createSlugWithId } from "../utils/slugify";

const API_BASE = CONFIG.apiBaseUrl;

const Donate = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("1");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationType, setDonationType] = useState("recurring");
  
  // ------------------------
  // Currency setup
  // ------------------------
  const [currency, setCurrency] = useState("USD"); // default currency

  const currencySymbols = {
    USD: "$",
    GBP: "£",
    ZMW: "ZK",
    CAD: "C$",
    AUD: "A$",
    KES: "KES",
    ZAR: "R",
  };

  const donationAmountUSD = 10; // Base amount for alert
  const currencyConversionRates = {
    USD: 1,
    GBP: 1,
    CAD: 1.5,
    AUD: 1.5,
    ZMW: 20, // USD → ZMW
    KES: 129,
    ZAR: 17,
  };

  // Currencies that require button scaling
  const scaledCurrencies = new Set(["ZMW"]);

  // Convert amount for alert
  const formatAlertAmount = (usdAmount, currency) => {
    const rate = currencyConversionRates[currency] || 1;
    const converted = usdAmount * rate;
    return `${currencySymbols[currency] || "$"}${Math.round(converted)}`;
  };

  // Convert amount for preset buttons
  const formatButtonAmount = (usdAmount, currency) => {
    if (scaledCurrencies.has(currency)) {
      const rate = currencyConversionRates[currency] || 1;
      return `${currencySymbols[currency] || "$"}${Math.round(usdAmount * rate)}`;
    } else {
      return `${currencySymbols[currency] || "$"}${usdAmount}`;
    }
  };

  // Detect user location for default currency
  useEffect(() => {
    const setCurrencyByLocation = async () => {
      try {
        const locale = navigator.language || "en-US"; // e.g., "en-GB"
        const region = locale.split("-")[1];
        const regionCurrencyMap = {
          US: "USD",
          GB: "GBP",
          ZM: "ZMW",
          CA: "CAD",
          AU: "AUD",
        };
        setCurrency(regionCurrencyMap[region] || "USD");
      } catch (err) {
        console.error("Could not determine location:", err);
        setCurrency("USD"); // fallback
      }
    };
    setCurrencyByLocation();
  }, []);

  // ------------------------
  // Fetch projects
  // ------------------------
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`);
        const data = await res.json();
        if (Array.isArray(data)) setProjects(data);

        const projectIdFromSlug = projectSlug ? extractIdFromSlug(projectSlug) : null;
        const hasProject = projectIdFromSlug && data.some((proj) => proj.id === projectIdFromSlug);

        if (hasProject) {
          setSelectedProjectId(String(projectIdFromSlug));
        } else if (!projectSlug) {
          const defaultProjectId = "1";
          const hasDefault = data.some((proj) => String(proj.id) === defaultProjectId);
          if (hasDefault) setSelectedProjectId(defaultProjectId);
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, [projectSlug]);

  // Update selectedProject whenever selectedProjectId changes
  useEffect(() => {
    const proj = projects.find((p) => String(p.id) === selectedProjectId);
    setSelectedProject(proj || null);
    setCurrentMediaIndex(0);
  }, [selectedProjectId, projects]);

  // Validate slug
  useEffect(() => {
    if (selectedProject && projectSlug) {
      const correctSlug = createSlugWithId(selectedProject.name, selectedProject.id);
      if (projectSlug !== correctSlug) {
        navigate(`/donate/${correctSlug}`, { replace: true });
      }
    }
  }, [selectedProject, projectSlug, navigate]);

  // Handlers
  const handleProjectChange = (e) => setSelectedProjectId(e.target.value);
  const handleAmountClick = (amount) => { setSelectedAmount(amount); setShowCustom(false); };
  const handleCustomAmountClick = () => { setShowCustom(true); setSelectedAmount(null); };
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
          currency: currency,
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
  useEffect(() => { if (!showCustom) setCustomAmount(""); }, [showCustom]);

  return (
    <>
      <Helmet>
        <title>Donate | Africa Access Water</title>
        <meta name="description" content="Support our clean water projects through your generous donations." />
        <meta property="og:title" content="Donate to Africa Access Water" />
        <meta property="og:description" content="Your support brings clean, safe water to those in need." />
        <meta property="og:image" content="/images/og-donate.jpg" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <Layout>
        <div style={{ paddingTop: window.innerWidth < 768 ? '95px' : '130px', backgroundColor: '#001d23' }}></div>

        <div className="container-fluid donate mb-5 py-5" style={{ backgroundImage: `url('img/pipe.jpg')`, backgroundAttachment: "fixed", backgroundSize: "cover" }}>
          <div className="container py-5">
            <div className="row g-5 align-items-start">
              {/* Left Side */}
              <div className="col-lg-6 h-100 bg-white p-5 rounded shadow-sm">
                {selectedProjectId === "1" || !selectedProject ? (
                  <>
                    <h1 className="fw-bold mb-4 text-dark">Join Us in <span className="text-primary">Making a Difference</span></h1>
                    <p className="text-muted mb-4">
                      In making a donation with us you are securing clean drinking water for generations. You are ensuring people in rural communities have food security. You are empowering communities with education, a consistent income and a <strong>brighter future.</strong>
                    </p>

                    {/* Alert with converted currency */}
                    <div className="alert alert-primary rounded-pill px-4 py-2 mb-4 d-inline-block shadow-sm w-100 text-center">
                      <i className="bi bi-flag me-2"></i>
                      <strong>
                        Every {formatAlertAmount(donationAmountUSD, currency)} provides clean drinking water for decades
                      </strong>
                    </div>

                    <p className="mb-4">
                      All donations are securely processed via <strong>Stripe</strong>. Thank you for empowering change.
                    </p>
                  </>
                ) : (
                  <>
                    {/* Project info and slider can remain unchanged */}
                  </>
                )}
              </div>

              {/* Right Side Form */}
              <div className="col-lg-6">
                <div className="h-100 bg-white p-5 rounded shadow-sm text-center">
                  <Link to="/" className="d-flex justify-content-center mb-4">
                    <img src="/img/logos/afaw-logo-black.png" alt="afaw-logo-africa" className="img-fluid" style={{ width: "40px", height: "auto" }} />
                  </Link>

                  <div className="d-inline-block rounded-pill bg-primary text-white py-2 px-4 mb-4 shadow-sm">
                    <i className="bi bi-heart-fill me-2"></i> Support Our Cause
                  </div>

                  <form onSubmit={handleSubmit} className="text-start">
                    {/* Name & Email */}
                    <div className="form-group mb-3">
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                        <input type="text" name="donor_name" className="form-control" placeholder="Full Name" required />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                        <input type="email" name="donor_email" className="form-control" placeholder="Email Address" required />
                      </div>
                    </div>

                    {/* Project dropdown */}
                    <div className="form-group mb-3">
                      <select name="project_id" className="form-select" value={selectedProjectId} onChange={handleProjectChange} required>
                        <option value="1">General Donation</option>
                        {projects.filter(p => String(p.id) !== "1").map(project => (
                          <option key={project.id} value={project.id}>{project.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Donation Type + Currency */}
                    <div className="form-group row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <select name="donation_type" className="form-select" value={donationType} onChange={e => setDonationType(e.target.value)} required>
                          <option value="">Donation Type</option>
                          <option value="one_time">One Time</option>
                          <option value="recurring">Recurring</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <select name="currency" className="form-select" value={currency} onChange={e => setCurrency(e.target.value)} required>
                          {Object.keys(currencySymbols).map((cur) => <option key={cur} value={cur}>{cur}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Recurring Interval */}
                    {donationType === "recurring" && (
                      <div className="form-group mb-3">
                        <select name="interval" className="form-select" required defaultValue="month">
                          <option value="">Select Interval</option>
                          <option value="day">Daily</option>
                          <option value="week">Weekly</option>
                          <option value="month">Monthly</option>
                          <option value="year">Yearly</option>
                        </select>
                      </div>
                    )}

                    {/* Preset amounts */}
                    <div className="form-group mb-4">
                      <label className="form-label fw-semibold">Select Donation Amount</label>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        {[10, 30, 50, 100].map((amountUSD) => {
                          const displayAmount = formatButtonAmount(amountUSD, currency);
                          return (
                            <button
                              key={amountUSD}
                              type="button"
                              className={`btn btn-outline-primary ${selectedAmount === String(amountUSD) ? "active" : ""}`}
                              onClick={() => handleAmountClick(String(amountUSD))}
                            >
                              {displayAmount}
                            </button>
                          );
                        })}
                        <button type="button" className="btn btn-outline-primary" onClick={handleCustomAmountClick}>Other</button>
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
                    <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
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
