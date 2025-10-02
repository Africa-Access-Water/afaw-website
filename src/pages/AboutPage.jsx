import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";

function AboutPage() {
  return (
    <Layout title="About Us - Africa Access Water">
      <Header title="About Us" current="About" />

      {/* About Section */}
      <div className="container-xxl py-5 mt-5">
        <div className="container">
          <div className="row g-5" id="about">
            <About />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
