import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import HowItWorks from "../components/HowItWorks";
import Milestones2024 from "../components/Milestones2024";

function AboutPage() {
  return (
    <Layout title="About Us - Africa Access Water">
      <Header title="About Us" current="About" />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* How It Works Section */}
      <HowItWorks />

      {/* 2024 Milestones Section */}
      <Milestones2024 />
    </Layout>
  );
}

export default AboutPage;
