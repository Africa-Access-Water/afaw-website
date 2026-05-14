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
      <div className="row g-4 mx-2 mx-md-0 mx-lg-1">
        {partners.map((partner, index) => {
          return (
            <div className="col-6" key={partner.id || index}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none d-block h-100"
                style={{ color: "black" }}
              >
                <PartnerCard 
                  name={partner.name}
                  logo={partner.logo || "/img/placeholders/profile.jpg"} 
                  description={partner.description}
                />
              </a>
            </div>
          );
        })}
      </div>

    </Layout>
  );
};

export default PartnersPage;