import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import WhoWeAre from "../components/WhoWeAre";

function AboutPage() {
  return (
    <Layout title="About Us - Africa Access Water">
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
             src="/img/solar1-1.jpeg"
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
      
<WhoWeAre/>
      {/* <About/> */}
      {/* What We Do Section */}
      {/* <WhatWeDo /> */}
      
      {/* How It Works Section */}
      {/* <HowItWorks /> */}

      {/* 2024 Milestones Section */}
      {/* <Milestones2024 /> */}
    </Layout>
  );
}

export default AboutPage;
