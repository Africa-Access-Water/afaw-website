// src/pages/About.jsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import VisionMissionObjectives from "../components/VisionMission";
import CONFIG from "../config";
import Stat from '../components/Stat';
import Cause from '../components/Cause';
// import About from '../components/About';
// import Objectives from "../components/Objectives";
// import Sponsors from "../components/Sponsors";
import GetInvolved from "../components/GetInvolved";
import { Link } from "react-router-dom";



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
                                img: "img/hero2-2.jpg",
                                alt: "Rural Community with Water System",
                                // Unique selling point of the organisation, a hook to peak the user’s curiosity to know what you do and how you do it in 3s
                                title: "Clean Water Powered by the Sun ", 
                                desc:
                                    "Every donation brings safe, solar-powered water to those who need it most.",
                                buttonText: "Donate Today",
                                buttonLink: "/donate",
                            },
                            // ###Only one item on corousal needed for now
                            // {
                            //     img: "img/about.jpg",
                            //     alt: "Women Empowerment in Agriculture",
                            //     title: "Water is Life. Empowerment is Impact.",
                            //     desc:
                            //         "Join us in empowering women, youth, and farmers with clean water for agriculture and economic independence.",
                            //     buttonText: "Donate Now",
                            //     buttonLink: "/donate",
                            // },
                        ]}
                    />
                </section>
                {/* Carousel End */}

                <VisionMissionObjectives/>

                {/*Stats Section*/} 

<section className="section-beige Feautes mt-4 section">

                {/* added a header for the stats */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center px-4 py-4 mx-auto responsive-width">
                            {/* added this for flow and storytelling impact */}
                        <h2> Together, We Deliver Hope. </h2>
                                <p className="mb-5">
                                    Since 2019, our solar-powered water systems have brought clean water, jobs, and education to thousands of families in Zambia.  
                                    Children can go to school, families can earn a living, and communities can thrive.  
                                    <br/><br/> Yet <span className="text-primary font-semibold">over 1,000,000 people</span> still lack safe water.  
                                    Together, we can turn every drop into hope and opportunity.
                                </p>
                                <Link to="/about">
                                    <a className="cta-link">Explore Our Story</a>
                                </Link>
                        </div>
                        
                    </div>
                {/* <div className="container-xxl py-5 bg-light">
                    <div className="container">
                        
                        <div className="row g-4 justify-content-center align-items-stretch">
                            <Stat icon="fa fa-solar-panel" number="9" text="Solar-powered water infrastructure in 4 project sites" />
                            <Stat icon="fa fa-users" number="6,000" text="Households food secure with income" />
                            <Stat icon="fa fa-tint" number="30,000" text="People & 2,500 animals with clean drinking water" />
                            <Stat icon="fa fa-dollar-sign" number="190,000" text="US$ annually communities' income from produce" />
                        </div>
                    </div>
                </div> */}

                <section className="stats-section mt-4 section">
  <div className="container">
   <p className="text-center mb-4">
  Clean water Powered by the Sun.
  <span style={{ color: '#f8bc06' }}> See the difference we’re making together:</span>
</p>

    <div className="row g-4 justify-content-center align-items-stretch">
      <Stat icon="fa fa-solar-panel" number="9" text="Solar-powered water projects across 4 sites" />
      <Stat icon="fa fa-users" number="6,000+" text="Households now food-secure with income" />
      <Stat icon="fa fa-tint" number="30,000+" text="People & 2,500 animals with clean drinking water" />
      <Stat icon="fa fa-dollar-sign" number="$190,000+" text="Annual income from local produce" />
    </div>
  </div>
</section>

                </div>
        
</section>
                {/* <Objectives /> */}

                {/* About Section */}
                {/* <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5" id="about">
                            <About />
                        </div>
                    </div>
                </div> */}
                
                {/* Projects Section */}
                <div className="container-xxl bg-light my-5">
                    <div className="container py-5">
                        <div className="home text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Be Part of a Project</div>
                            <h2 className="display-6 mb-4">Resilience Through Water, Opportunity Through Action</h2>
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
                                            projectId={project.id}
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

                <GetInvolved/>

                {/* Sponsors Section */}
                {/* <Sponsors /> */}
            </Layout>
        </>
    );
}

export default Home;
