import React from 'react';
import "../styles/VisionMissionObjectives.css";

const VisionMissionObjectives = () => {
  return (
    <>
    <section className="Feautes mt-4 section">
        <div className="container">
            {/* about us */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center px-4 mx-auto responsive-width">
                        <h2>Welcome to Africa Access Water</h2>
                        <p>We are a non-profit organization based in Zambia, established in 2019. We design, equip, and
                            implement sustainable solar-powered water infrastructure and systems for productive use,
                            aiming to improve livelihoods and combat rural poverty across Africa.</p>
                    </div>
                </div>
            </div>
            {/* our vision and mission */}
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="single-features">
                        <div className="signle-icon">
                            <i className="icofont icofont-eye-alt"></i>
                        </div>
                        <h3>Our Vision</h3>
                        <p>African communities developed through solar-powered water.</p>
                    </div>

                </div>
                <div className="col-lg-6 col-12">
                    <div className="single-features last">
                        <div className="signle-icon">
                            <i className="icofont icofont-flag"></i>
                        </div>
                        <h3>Our Mission</h3>
                        <p>To equip rural communities in Zambia and Africa with solar-powered water infrastructure and
                            systems for
                            productive use, food security, and socio-economic development.</p>
                    </div>

                </div>

            </div>
        </div>
    </section>

    </>
  )
}

export default VisionMissionObjectives;