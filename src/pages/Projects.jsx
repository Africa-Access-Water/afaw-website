// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { TbFileText } from "react-icons/tb";
import Header from "../components/Header";
import CONFIG from "../config";
import WhatWeDo from "../components/WhatWeDo";
import { createSlugWithId } from "../utils/slugify";

const API_BASE = CONFIG.apiBaseUrl;

function Projects() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

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

    return (
        <>
            <Helmet>
                <title>Projects | Africa Access Water</title>
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
                {/* Spacer to prevent navbar overlap */}
                <div
                  style={{
                    paddingTop: window.innerWidth < 768 ? '95px' : '130px',
                    backgroundColor: '#001d23',
                  }}
                > 
                </div>
                 <section className="position-relative text-white text-center">
          <img
            // src="/img/IMG-20240418-WA0094.jpg"
             src="/img/community2.jpg"
            alt="Clean water flowing"
            className="img-fluid w-100 impact-img"
            style={{
              objectFit: "cover",
              filter: "brightness(100%)",
            }}
          />
          <style>{`
  /* Default for mobile, small, and medium screens */
  .impact-img {
    height: 250px;
  }

  /* Large screens and above (≥ 992px) */
  @media (min-width: 992px) {
    .impact-img {
      height: 400px;
    }
  }
`}</style>

        </section>

                <div className="container-xxl mb-5 pb-5">
                    <div className="container py-5">
                        <div
                            className="text-center mx-auto mb-5"
                            style={{ maxWidth: "600px" }}
                        >
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                               Proof of Impact
                            </div>
                            <h1 className="display-5 mb-4">
                           Real Communities. Real Change. Real Impact
                            </h1>
                            <p className="mb-4">
                              Every project we deploy strengthens food security, boosts incomes, and expands access to clean water.
                              <br/>
                               Browse our ongoing and completed projects to see the progress, the data, and                             
                                <span className="text-primary">the lives changed.</span>   
                            </p>
                        </div>

                        <div className="row g-4">
                            {projects.length === 0 ? (
                                <p className="text-center w-100">
                                    No projects available at the moment.
                                </p>
                            ) : (
                                projects.map((project, index) => {
                                    const allImages = [
                                        ...(project.cover_image ? [project.cover_image] : []),
                                        ...(project.media || []),
                                    ];

                                    return (
                                        <div key={project.id || index} className="col-lg-6 col-md-6">
                                            <div 
                                                className="card h-100 shadow-sm border-0 rounded"
                                            >
                                                {/* Carousel for Cover + Media */}
                                                {allImages.length > 0 ? (
                                                    <div
                                                        id={`carousel-${index}`}
                                                        className="carousel slide"
                                                        data-bs-ride="carousel"
                                                    >
                                                        <div className="carousel-inner">
                                                            {allImages.map((img, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                                                                >
                                                                    <img
                                                                        src={img}
                                                                        className="d-block w-100 vh-70"
                                                                        alt={`${project.name}-img-${idx}`}
                                                                        style={{
                                                                            height: "220px",
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
                                                                    data-bs-target={`#carousel-${index}`}
                                                                    data-bs-slide="prev"
                                                                >
                                                                    <span
                                                                        className="carousel-control-prev-icon"
                                                                        aria-hidden="true"
                                                                    ></span>
                                                                    <span className="visually-hidden">Previous</span>
                                                                </button>
                                                                <button
                                                                    className="carousel-control-next"
                                                                    type="button"
                                                                    data-bs-target={`#carousel-${index}`}
                                                                    data-bs-slide="next"
                                                                >
                                                                    <span
                                                                        className="carousel-control-next-icon"
                                                                        aria-hidden="true"
                                                                    ></span>
                                                                    <span className="visually-hidden">Next</span>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <img
                                                        src="/images/default-project.jpg"
                                                        className="card-img-top"
                                                        alt="default project"
                                                        style={{
                                                            height: "220px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                )}

                                                {/* Card Body */}
                                                <div className="card-body d-flex flex-column">
                                                    <h5 className="card-title mb-2">{project.name}</h5>
                                                    <p className="card-text text-muted mb-3">{project.description}</p>

                                                    <ul className="list-unstyled small mb-3">
                                                        {project.category && (
                                                            <li>
                                                                <strong>Category:</strong> {project.category}
                                                            </li>
                                                        )}
                                                        <li>
                                                            <strong>Goal:</strong> $
                                                            {project.donation_goal?.toLocaleString() || 0}
                                                        </li>
                                                        {/* <li className="text-success">
                                                            <strong>Raised:</strong> $
                                                            {project.donation_raised?.toLocaleString() || 0}
                                                        </li> */}
                                                    </ul>

                                                    {/* View Details and Donate Buttons */}
                                                    <div className="d-flex justify-content-between align-items-center mt-auto">
                                                        <button
                                                            className="btn btn-outline-primary btn-sm"
                                                            onClick={() => navigate(`/our-work/${createSlugWithId(project.name, project.id)}`)}
                                                        >
                                                            View Details
                                                            <i className="fas fa-arrow-right ms-2"></i>
                                                        </button>

                                                        <a
                                                            href={`/donate/${createSlugWithId(project.name, project.id)}`}
                                                            className="btn btn-primary btn-sm"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            Donate
                                                            <i className="fa fa-tint px-2" style={{ color: "#1a76d1", fontSize: "1rem" }}></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
};

export default Projects;
