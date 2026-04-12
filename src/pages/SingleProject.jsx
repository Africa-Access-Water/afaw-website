import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import CONFIG from "../config";
import { Helmet } from "react-helmet";
import { TbFileText } from "react-icons/tb";
import { extractIdFromSlug, createSlugWithId } from "../utils/slugify";
import { marked } from "marked";

const API_BASE = CONFIG.apiBaseUrl;

const SingleProject = () => {
  const { id: slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    // Extract ID from slug (e.g., "clean-water-project-5" -> 5)
    const projectId = extractIdFromSlug(slug);
    
    if (!projectId) {
      setError("Invalid project URL");
      setLoading(false);
      return;
    }

    fetch(`${API_BASE}/api/projects/${projectId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Project not found");
        }
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setProject(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => (mounted = false);
  }, [slug]);

  // Validate and redirect to canonical URL if slug doesn't match
  useEffect(() => {
    if (project && slug) {
      const correctSlug = createSlugWithId(project.name, project.id);
      if (slug !== correctSlug) {
        console.log(`Redirecting from wrong slug "${slug}" to correct slug "${correctSlug}"`);
        navigate(`/our-work/${correctSlug}`, { replace: true });
      }
    }
  }, [project, slug, navigate]);

  if (loading) {
    return (
      <Layout title="Loading... - Africa Access Water">
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? "95px" : "130px",
            backgroundColor: "#001d23",
          }}
        />
        <div className="container mt-5">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading project...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !project) {
    return (
      <Layout title="Project Not Found - Africa Access Water">
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? "95px" : "130px",
            backgroundColor: "#001d23",
          }}
        />
        <div className="container mt-5">
          <div className="text-center">
            <h1 className="mb-3">Project Not Found</h1>
            <p className="text-muted">{error || "The project you're looking for doesn't exist."}</p>
            <Link to="/our-work" className="btn btn-primary mt-3">
              Back to Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const allImages = [
    ...(project.cover_image ? [project.cover_image] : []),
    ...(project.media || []),
  ];

  const progressPercentage = project.donation_goal
    ? Math.min((project.donation_raised / project.donation_goal) * 100, 100)
    : 0;

  return (
    <>
      <Helmet>
        <title>{project.name} | Africa Access Water</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.cover_image || "/images/default-project.jpg"} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Layout title={`${project.name} - Africa Access Water`}>
        {/* Spacer to prevent navbar overlap */}
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? "95px" : "130px",
            backgroundColor: "#001d23",
          }}
        />

        <div className="container-xxl mb-5 pb-5">
          <div className="container mt-5">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/our-work">Projects</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {project.name}
                </li>
              </ol>
            </nav>

            {/* Project Content */}
            <div className="row">
              {/* Left Column - Images and Gallery */}
              <div className="col-lg-7 mb-4">
                {allImages.length > 0 ? (
                  <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      {allImages.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          data-bs-target="#projectCarousel"
                          data-bs-slide-to={idx}
                          className={idx === 0 ? "active" : ""}
                          aria-current={idx === 0 ? "true" : "false"}
                          aria-label={`Slide ${idx + 1}`}
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner rounded shadow-lg">
                      {allImages.map((img, idx) => (
                        <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                          <img
                            src={img}
                            className="d-block w-100"
                            alt={`${project.name}-img-${idx}`}
                            style={{
                              height: "450px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    {allImages.length > 1 && (
                      <>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#projectCarousel"
                          data-bs-slide="prev"
                        >
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#projectCarousel"
                          data-bs-slide="next"
                        >
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <img
                    src="/images/default-project.jpg"
                    className="img-fluid rounded shadow-lg"
                    alt="default project"
                    style={{ height: "450px", width: "100%", objectFit: "cover" }}
                  />
                )}

                {/* Project Description & Details */}
                <div className="mt-4">
                  <h2 className="mb-3">About This Project</h2>
                  {project.details ? (
                    <div 
                      className="project-details-markdown"
                      dangerouslySetInnerHTML={{ __html: marked.parse(project.details) }}
                    />
                  ) : (
                    <p className="lead" style={{ whiteSpace: "pre-wrap" }}>
                      {project.description}
                    </p>
                  )}

                  {project.location && (
                    <div className="mt-4">
                      <h5>
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        Location
                      </h5>
                      <p>{project.location}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Project Details */}
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 sticky-top" style={{ top: "100px" }}>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {project.category && (
                        <span className="badge bg-primary mb-2">{project.category}</span>
                      )}
                      <h1 className="h3 fw-bold">{project.name}</h1>
                    </div>

                    {/* Funding Progress */}
                    <div className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-success fw-bold">
                          ${project.donation_raised?.toLocaleString() || 0}
                        </span>
                        <span className="text-muted">
                          of ${project.donation_goal?.toLocaleString() || 0} goal
                        </span>
                      </div>
                      <div className="progress" style={{ height: "12px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: `${progressPercentage}%` }}
                          aria-valuenow={progressPercentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small className="text-muted d-block mt-1">
                        {progressPercentage.toFixed(1)}% funded
                      </small>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-grid gap-2">
                      <Link to={`/donate/${createSlugWithId(project.name, project.id)}`} className="btn btn-primary btn-lg">
                        <i className="fas fa-heart me-2"></i>
                        Support This Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Projects Button */}
            <div className="mt-5 text-center">
              <Link to="/our-work" className="btn btn-outline-primary">
                <i className="fas fa-arrow-left me-2"></i>
                Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleProject;
