import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import ShareButton from "../components/ShareButton";
import CONFIG from "../config";

const API_BASE = CONFIG.apiBaseUrl;

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("project_id"); // 👈 get projectId from URL
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(data);

          if (projectId) {
            const found = data.find((p) => String(p.id) === String(projectId));
            if (found) setProject(found);
          }
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, [projectId]);

  return (
    <>
       <Helmet>
        <title>Posts | Africa Access Water</title>
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

      <Layout title="Donation Success - Africa Access Water">
        {/* Spacer to prevent navbar overlap */}
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? '95px' : '130px',
            backgroundColor: '#001d23',
          }}
        >
        </div>

        {/* Hero Section */}
        <section className="position-relative text-white text-center">
          <img
            src="/img/IMG-20240418-WA0094.jpg"
            alt="Clean water flowing"
            className="img-fluid w-100"
            style={{
              height: "400px",
              objectFit: "cover",
              filter: "brightness(60%)",
            }}
          />
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="display-4 text-white fw-bold">
              Thank You for Giving Water
            </h1>
            <p className="lead mb-0">
              {project
                ? `Your gift is changing lives through ${project.name}.`
                : "Your gift is changing lives in Mphande & Rufunsa."}
            </p>
          </div>
        </section>

        {/* Thank You Message */}
        <section className="container py-5 text-center">
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Because of your generosity, families will drink clean water,
            children will grow up healthier, and entire communities will thrive.
            These solar-powered water systems will directly impact{" "}
            <strong>over 2,300 people and 1,000 animals</strong> — transforming
            daily struggles into opportunities for dignity, growth, and hope.
          </p>
        </section>

        {/* Project Progress */}
        {project && (
          <section className="container text-center mb-5">
            <h3 className="fw-bold mb-3">{project.name} Progress</h3>
            <p className="fs-5 text-primary">
              ${project.donation_raised?.toLocaleString()} of $
              {project.donation_goal?.toLocaleString()} raised
            </p>
            <div className="progress" style={{ height: "12px" }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{
                  width: `${(project.donation_raised / project.donation_goal) * 100
                    }%`,
                }}
                aria-valuenow={project.donation_raised}
                aria-valuemin="0"
                aria-valuemax={project.donation_goal}
              ></div>
            </div>
            <p className="small text-muted mt-2">
              {Math.round(
                (project.donation_raised / project.donation_goal) * 100
              )}
              % funded
            </p>
          </section>
        )}

        {/* Stories Section */}
        {/* Stories Section */}
        <section className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Because of You</h2>
            <div className="row g-4">
              {[
                {
                  img: "/img/carousel-1.jpg",
                  text: "“My children no longer walk long distances for water. They are healthier, and I have time to farm and care for my family. AfAW has given us life and dignity back.”",
                  author: "A Mother’s Voice",
                },
                {
                  img: "/img/potato.jpg",
                  text: "“With solar irrigation, I now farm all year and sell my produce at the market. I am not just a farmer — I am a businesswoman. AfAW has empowered us women to stand on our own feet.”",
                  author: "A Young Woman Farmer",
                },
                {
                  img: "/img/about1.jpg",
                  text: "“AfAW gave us more than water. They trained us to sustain it, and now we have clean water, better harvests, and small businesses. They brought hope for a better future.”",
                  author: "Community Leader",
                },
                {
                  img: "/img/irrigated 1.jpg",
                  text: "“I never thought I’d see clean water here in my lifetime. Now I fetch it near my home, and my grandchildren grow up healthy. AfAW has truly blessed our community.”",
                  author: "A Grandmother’s Reflection",
                },
              ].map((story, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="card h-100 border-0 shadow-sm">
                    <img
                      src={story.img}
                      alt={story.author}
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                    <div className="card-body text-center">
                      <blockquote className="blockquote mb-0">
                        <p className="fst-italic">{story.text}</p>
                        <footer className="blockquote-footer mt-2">
                          {story.author}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Next Step */}
        <section className="container text-center py-5">
          <h4 className="fw-bold mb-3">Double Your Impact</h4>
          <p className="text-muted">
            Invite a friend to join you in bringing clean water to Africa.
          </p>
          <ShareButton />
          <a href="/posts" className="btn btn-outline-primary mt-3 mx-2 px-4">
            View Ongoing Projects
          </a>
        </section>
      </Layout>
    </>
  );
};

export default SuccessPage;
