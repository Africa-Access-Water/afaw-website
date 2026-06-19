// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import CONFIG from "../config";
import { createSlugWithId } from "../utils/slugify";

const API_BASE = CONFIG.apiBaseUrl;

const FILTERS = ["All", "Water", "Sanitation", "Education", "Health"];

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  // Fetch projects
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(`${API_BASE}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        const arr = Array.isArray(data) ? data : [];
        setProjects(arr);
        const visibleProjects = arr.filter(
          (p) => p.type?.toLowerCase() !== "NotProject"
        );

        setFeaturedProject(
          visibleProjects.length ? visibleProjects[0] : null
        );
      })
      .catch(() => {
        if (!mounted) return;
        setProjects([]);
        setFeaturedProject(null);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => (mounted = false);
  }, []);

  const filteredProjects = projects
  .filter((p) => p.type?.toLowerCase() !== "NotProject")
  .filter((p) =>
    filter === "All"
      ? true
      : p.category?.toLowerCase() === filter.toLowerCase()
  );

  if (loading)
    return (
      <Layout title="Projects - Africa Access Water">
        <div className="text-center mt-5">Loading projects...</div>
      </Layout>
    );

  if (!projects.length)
    return (
      <Layout title="Projects - Africa Access Water">
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? "95px" : "130px",
            backgroundColor: "#001d23",
          }}
        />
        <div className="container mt-5">
          <h1>Projects</h1>
          <p>No projects found.</p>
        </div>
      </Layout>
    );

  return (
    <>
      <Helmet>
        <title>Projects | Africa Access Water</title>
        <meta
          name="description"
          content="Support our clean water projects through your generous donations."
        />
        <meta property="og:title" content="Africa Access Water Projects" />
        <meta
          property="og:description"
          content="Explore our ongoing and completed projects making real impact."
        />
        <meta property="og:image" content="/images/og-donate.jpg" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <Layout title="Projects - Africa Access Water">
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? "95px" : "130px",
            backgroundColor: "#001d23",
          }}
        />

        <div className="container-xxl mb-5 pb-5">
          <div className="container mt-5">
            <h1 className="mb-4">Projects</h1>

            {/* Filters */}
            <div className="mb-4">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`btn me-2 mb-2 ${
                    filter === f ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="row">
              {/* Featured Project */}
              {featuredProject && (
                <div className="col-lg-8 mb-4">
                  <div
                    className="card shadow-lg cursor-pointer"
                    onClick={() =>
                      navigate(`/our-work/${createSlugWithId(featuredProject.name, featuredProject.id)}`)
                    }
                  >
                    <img
                      src={featuredProject.cover_image || "/images/default-project.jpg"}
                      alt={featuredProject.name}
                      className="card-img-top"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      {featuredProject.category && (
                        <small className="text-muted text-uppercase">{featuredProject.category}</small>
                      )}
                      <h2 className="card-title mt-2">{featuredProject.name}</h2>
                      <p className="card-text">
                        {featuredProject.description.length > 200
                          ? featuredProject.description.slice(0, 200) + "..."
                          : featuredProject.description}
                      </p>
                      <div className="mt-3">
                        <span className="text-primary">View Details →</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Remaining Projects */}
              <div className="col-lg-4">
                {filteredProjects
                  .filter((p) => p.id !== featuredProject?.id)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="cursor-pointer mb-4"
                      onClick={() =>
                        navigate(`/our-work/${createSlugWithId(project.name, project.id)}`)
                      }
                    >
                      <div className="card shadow-sm border-0 rounded h-100">
                        <img
                          src={project.cover_image || "/images/default-project.jpg"}
                          className="card-img-top"
                          alt={project.name}
                          style={{ height: "220px", objectFit: "cover" }}
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title mb-2">{project.name}</h5>
                          <p className="card-text text-muted mb-3">
                            {project.description.length > 60
                              ? project.description.slice(0, 60) + "..."
                              : project.description}
                          </p>
                          <div className="mt-auto">
                            <span className="text-primary">View Details →</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
