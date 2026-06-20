import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PartnerCarousel from "./PartnerCarousel";
import PartnerCard from "../components/PartnerCard"
import { partnersData } from "../data/partnersData";


const PartnersPage = () => {
  useEffect(() => {
    document.title = "Our Partners - AfAW";
  }, []);

  const partners = partnersData;

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
      {/* <div className="container-xxl mb-5">
        <div className="container" >
          <PartnerCarousel />
        </div>
        
      </div> */}

      {/* Our Board Members */}
      <div className="container-xxl mt-5">
        <div className="container">
          {/* <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Our Board Members</h1>
          </div> */}
            <div className="row g-4 mx-2 mx-md-0 mx-lg-1">
              {partners.map((partner, index) => {
                return (
                  <PartnerCard 
                    key={partner.id || index} 
                    name={partner.name}
                    logo= {partner.logo || "/img-optimized/placeholders/profile.jpg"} 
                    description={partner.description}
                  />
                );
              })}
            </div>
        </div>
      </div>

    </Layout>
  );
};

export default PartnersPage;