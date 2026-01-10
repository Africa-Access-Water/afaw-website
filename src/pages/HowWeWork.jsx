// src/pages/HowWeWork.jsx
import React from 'react';
import Milestones2024 from '../components/Milestones2024';
import HowWeWork from '../components/HowWeWork';
import Layout from '../components/Layout';
import Process from '../components/Process';
import CommunityPartnership from '../components/CommunityPartnership';

const sections = [
    {
        title: "Water Infrastructure Development in Rural Communities",
        image: "/img/wwd1.jpg",
        content: (
            <>
                <p className="text-muted mb-2">
                    Many rural communities struggle to access safe water. Our first step is building reliable, solar-powered water systems that provide clean water for drinking, farming, and livestock.
                </p>
                <p className="text-muted mb-2">
                    We work hand-in-hand with communities to identify water sources, drill boreholes, construct dams, and set up solar-powered pumps and distribution networks.
                </p>
                <p className="text-muted mb-2">
                    By creating sustainable water systems, we lay the foundation for resilient communities and economic growth.
                </p>
            </>
        ),
    },
    {
        title: "Community Empowerment & Agriculture",
        image: "/img/wwd2.jpg",
        content: (
            <>
                <p className="text-muted mb-2">
                    Clean water alone isn’t enough. We engage communities in communal farming, providing training, seeds, and irrigation to boost food security and income.
                </p>
                <p className="text-muted mb-2">
                    Our programs foster collaboration, skill-building, and opportunities for women and youth to take leadership in sustaining the projects.
                </p>
                <p className="text-muted mb-2">
                    A portion of the harvest is reinvested into a community fund, ensuring long-term support and growth.
                </p>
            </>
        ),
    },
    {
        title: "Measuring Impact & Growth",
        image: "/img/wwd3.jpg",
        content: (
            <>
                <p className="text-muted mb-2">
                    Every project is carefully monitored to understand how water access transforms lives. We track improvements in food production, income, and overall community resilience.
                </p>
                <p className="text-muted mb-2">
                    Using technology and data-driven insights, we identify successes, scale effective solutions, and continuously refine our approach.
                </p>
                <p className="text-muted mb-2">
                    Our goal is measurable, lasting impact—ensuring that each community thrives long after we leave.
                </p>
            </>
        ),
    },
    {
        title: "Research, Advocacy & Partnerships",
        image: "/img/wwd4.jpg",
        content: (
            <>
                <p className="text-muted mb-2">
                    We don’t just build water systems—we create knowledge and awareness. Through research and advocacy, we help communities, governments, and stakeholders make informed decisions about water and climate resilience.
                </p>
                <p className="text-muted mb-2">
                    Our Water Economy Dialogues bring together diverse actors to collaborate on sustainable water, energy, and agriculture solutions.
                </p>
                <p className="text-muted mb-2">
                    Together, we strengthen policies, encourage equitable water use, and amplify the voices of the communities we serve.
                </p>
            </>
        ),
    }
];

const HowWeWorkPage = () => {
    return (
        <Layout title="How We Work - Africa Access Water">
          <div
          style={{
            paddingTop: window.innerWidth < 768 ? '95px' : '130px',
            backgroundColor: '#001d23',
          }}
        > 
        </div>
        <div>
          <section className="position-relative text-white text-center">
          <img
             src="/img/howitworks1.jpg"
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
            {/* Hero Section */}
            <section className="text-center py-5 bg-light">
                <div className="container" style={{ maxWidth: '700px' }}>
                    {/* <div className="d-inline-block rounded-pill bg-secondary text-primary px-3 mb-3">How We Work</div> */}
                    <h1 className="display-5 fw-bold mb-3 text-dark">How We Turn Water Into Opportunity</h1>
                    <p className="text-muted  mb-2">
                        Water scarcity limits everything; health, education, and economic growth. We partner with communities to design and implement sustainable water solutions. Our process transforms rural productivity and livelihoods through innovative solutions.
                    </p>
                    <p className="text-muted">
                        Every project is a journey: from assessing needs, building infrastructure, training local farmers, to creating self-sustaining community funds. You are part of this journey.
                    </p>
                </div>
                 <div
                            className="position-relative overflow-hidden rounded shadow-lg mb-4 d-flex justify-content-center"
                            style={{ maxWidth: '800px', margin: '0 auto' }}
                        >
                            {/* <img
                                src="/img/howitworks1.jpg"
                                alt="Community working together on water infrastructure project"
                                className="img-fluid w-100"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            /> */}
                        </div>
            </section>

            <Process/>
            
            <CommunityPartnership/>

            <HowWeWork/>
           
        </div>
         
        </Layout>
    );
};

export default HowWeWorkPage;
