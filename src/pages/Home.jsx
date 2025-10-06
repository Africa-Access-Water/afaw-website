// src/pages/About.jsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import VisionMission from "../components/VisionMission ";
import CONFIG from "../config";
import Stat from '../components/Stat';
import Cause from '../components/Cause';
import About from '../components/About';
import Objectives from "../components/Objectives";
import Sponsors from "../components/Sponsors";

const API_BASE = CONFIG.apiBaseUrl;

function Home() {
    const [projects, setProjects] = useState([]);

    // Fetch projects from API
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
                <title>Africa Access Water | Home</title>
                <meta name="description" content="Empowering rural communities with clean water solutions." />
                <meta property="og:title" content="Africa Access Water" />
                <meta property="og:description" content="Empowering rural communities with solar-powered water systems." />
                <meta property="og:image" content="/images/og-home.jpg" />
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <Layout title="Africa Access Water" description="Learn how Africa Access Water empowers rural Africa with solar-powered water systems.">
                {/* Carousel Start */}
                <section className="vh-100" style={{ overflow: "hidden" }}>
                    <Carousel
                        slides={[
                            {
                                img: "img/corousal1-2.jpeg",
                                alt: "Rural Community with Water System",
                                title: "Empowering Africa Through Water",
                                desc:
                                    "We build solar-powered water infrastructure to improve food security, income, and climate resilience across rural Africa.",
                                buttonText: "Donate Now",
                                buttonLink: "/donate",
                            },
                            {
                                img: "img/about.jpg",
                                alt: "Women Empowerment in Agriculture",
                                title: "Water is Life. Empowerment is Impact.",
                                desc:
                                    "Join us in empowering women, youth, and farmers with clean water for agriculture and economic independence.",
                                buttonText: "Donate Now",
                                buttonLink: "/donate",
                            },
                        ]}
                    />
                </section>
                {/* Carousel End */}

                <VisionMission />

                {/*Stats Section*/}
                <div className="container-xxl py-5 bg-light">
                    <div className="container">
                        <div className="row g-4 justify-content-center align-items-stretch">
                            <Stat icon="fa fa-solar-panel" number="9" text="Solar-powered water infrastructure in 4 project sites" />
                            <Stat icon="fa fa-users" number="6,000" text="Households food secure with income" />
                            <Stat icon="fa fa-tint" number="30,000" text="People & 2,500 animals with clean drinking water" />
                            <Stat icon="fa fa-dollar-sign" number="190,000" text="US$ annually communities' income from produce" />
                        </div>
                    </div>
                </div>

                <Objectives />

                {/* About Section */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5" id="about">
                            <About />
                        </div>
                    </div>
                </div>
                
                {/* Projects Section */}
                <div className="container-xxl bg-light my-5 py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Be Part of a Project</div>
                            <h1 className="display-6 mb-4">Together, We Build Resilience Through Clean Water and Opportunity</h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {projects.length === 0 ? (
                                <p className="text-center w-100">No projects available at the moment.</p>
                            ) : (
                                // Get only the latest 3 projects
                                projects
                                    .slice(0, 3)
                                    .map((project, index) => (
                                        <Cause
                                            key={project.id || index}
                                            delay={`${index * 0.1}s`}
                                            title={project.name}
                                            desc={project.description}
                                            goal={project.donation_goal || 0}
                                            raised={project.donation_raised || 0}
                                            tag={project.category || "General"}
                                            img={project.cover_image || "/images/default-project.jpg"}
                                            alt={project.name}
                                        />
                                    ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Sponsors Section */}
                <Sponsors />
            </Layout>
        </>
    );
}

export default Home;
