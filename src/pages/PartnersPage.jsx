import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PartnerCarousel from "./PartnerCarousel";



const PartnersPage = () => {
  useEffect(() => {
    document.title = "Our Partners - AfAW";
  }, []);

  return (
    <Layout title="Our Partners - Africa Access Water">
      {/* Spacer */}
      <div
        style={{
          paddingTop: window.innerWidth < 768 ? "95px" : "130px",
          backgroundColor: "#001d23",
        }}
      ></div>

      {/* Header Section */}
      <div className="container-xxl py-5">
        <div className="container text-center">
          <h1 className="mb-3">Our Partners</h1>
          <p className="mb-4">
            We collaborate with organizations that share our vision of transforming
            communities and improving access to clean water across Africa.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container-xxl mb-5">
        <div className="container" >
          <PartnerCarousel />
        </div>
      </div>

    </Layout>
  );
};

export default PartnersPage;