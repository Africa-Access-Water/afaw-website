// src/pages/WhatWeDo.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import WhatWeDo from "../components/WhatWeDo"; 
import Milestones2024 from "../components/Milestones2024";

const WhatWeDoPage = () => {
  return (
    <>
      <Helmet>
        <title>What We Do | Africa Access Water</title>
        <meta
          name="description"
          content="Learn how Africa Access Water brings clean, sustainable water solutions to communities in need."
        />
      </Helmet>

      <Layout>
        {/* Spacer to prevent navbar overlap */}
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? "95px" : "130px",
            backgroundColor: "#001d23",
          }}
        />

       <section className="position-relative text-white text-center">
          <img
            // src="/img/IMG-20240418-WA0094.jpg"
             src="/img/hero.jpg"
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

                <div className="container-xxl">
                    <div className="container py-4">
                        <div
                            className="text-center mx-auto"
                            style={{ maxWidth: "800px" }}
                        >
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                               What We Do
                            </div>
                            <h1 className="display-6 mb-4">
                            Clean Water Is the First Step Toward Stronger Communities
                            </h1>
                            <p className="text-muted">
                               In the villages hardest hit by climate change, water is everything and right now, it’s scarce.
                                {/* Our journey begins, with listening, learning, and working side by side with the community. */}
                                 {/* <br/> <br/> */}
                                 Together, we build solar-powered water systems that do more than provide water.
                                  {/* they restore hope.
                                   You are part of making that possible. */}
                                   <br/>
                                   {/* And the work doesn’t stop at installation. With your support,
                                    we train farmers, empower youth, strengthen women’s groups, 
                                    and create community funds that sustain each project. */}
                                    {/* <br/> */}
                                     When water flows, resilience grows <span className="text-primary">and together, we help entire communities rise.</span>
                                     
                            </p>
                            
                        </div>
                        </div>
                        </div>
                        <WhatWeDo/>
                         <Milestones2024 />
      </Layout>
    </>
  );
};

export default WhatWeDoPage;
