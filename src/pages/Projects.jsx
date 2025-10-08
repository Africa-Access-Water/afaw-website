// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { TbFileText } from "react-icons/tb";
import Header from "../components/Header";
import CONFIG from "../config";
import WhatWeDo from "../components/WhatWeDo";

const API_BASE = CONFIG.apiBaseUrl;

function Projects() {
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

                <div className="container-xxl mb-5 pb-5">
                    <div className="container py-5">
                        <div
                            className="text-center mx-auto mb-5"
                            style={{ maxWidth: "600px" }}
                        >
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                                Our Impact
                            </div>
                            <h1 className="display-6 mb-4">
                                Projects Driving Clean Water Access
                            </h1>
                            <p className="text-muted">
                                Discover the initiatives making a difference across Africa.
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
                                            <div className="card h-100 shadow-sm border-0 rounded">
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
                                                                        className="d-block w-100 vh-100"
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
                                                        <li className="text-success">
                                                            <strong>Raised:</strong> $
                                                            {project.donation_raised?.toLocaleString() || 0}
                                                        </li>
                                                    </ul>

                                                    {/* PDF and Donate Buttons side by side and far apart */}
                                                    <div className="d-flex justify-content-between mt-auto">
                                                        {project.pdf_document ? (
                                                            <a
                                                                href={encodeURI(project.pdf_document)}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="btn btn-sm btn-outline-primary"
                                                            >
                                                                <TbFileText className="me-2" />
                                                                Project Details
                                                            </a>
                                                        ) : <span />}

                                                        <a
                                                            href={`/donate`}
                                                            className="btn btn-primary"
                                                        >
                                                            Donate
                                                            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-1" style={{ width: 22, height: 22, fontSize: 14 }}>
                                                                <i className="fa fa-arrow-up"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        {/* What We Do Section */}
                        <WhatWeDo />
                    </div>
                </div>

            </Layout>
        </>
    );
};

export default Projects;
