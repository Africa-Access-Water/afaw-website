import React from 'react';

const Milestones2024 = () => {
    return (
        <div className="container-xxl pb-5">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="display-5 mb-3 fw-bold text-dark">Reflecting On 2024: Celebrating Milestones</h1>
                    <p className="text-muted fs-5 mb-5">
                        Discover the impactful achievements we've accomplished together in 2024<br />
                        through sustainable water solutions.
                    </p>
                </div>

                {/* Milestones Grid */}
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        {/* Start Single Milestone */}
                        <div className="single-features">
                            <div className="single-icon">
                                <i className="icofont icofont-water-drop"></i>
                            </div>
                            <h3>Solar-Powered Water</h3>
                            <p>Constructed 3 extra solar-powered water infrastructure, productive use to rural communities
                                and enhancing agriculture. Serving more than 2,000 people.</p>
                        </div>
                        {/* End Single Milestone */}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        {/* Start Single Milestone */}
                        <div className="single-features">
                            <div className="single-icon">
                                <i className="icofont icofont-group"></i>
                            </div>
                            <h3>Water Economy Dialogue</h3>
                            <p>Hosted the inaugural Water Economy Dialogue, fostering collaboration among 25 stakeholders
                                for sustainable water resource&nbsp;management.</p>
                        </div>
                        {/* End Single Milestone */}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        {/* Start Single Milestone */}
                        <div className="single-features">
                            <div className="single-icon">
                                <i className="icofont icofont-handshake-deal"></i>
                            </div>
                            <h3>Women Empowerment</h3>
                            <p>Supported at least 200 women having savings groups, enabling financial resilience and
                                entrepreneurial activities&nbsp;in&nbsp;rural&nbsp;areas.</p>
                        </div>
                        {/* End Single Milestone */}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        {/* Start Single Milestone */}
                        <div className="single-features">
                            <div className="single-icon">
                                <i className="icofont icofont-group"></i>
                            </div>
                            <h3>Youth Engagement</h3>
                            <p>Trained at least 50 young people in water and solar systems maintenance and sustainable
                                agricultural&nbsp;skills.</p>
                        </div>
                        {/* End Single Milestone */}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        {/* Start Single Milestone */}
                        <div className="single-features">
                            <div className="single-icon">
                                <i className="icofont icofont-handshake-deal"></i>
                            </div>
                            <h3>Strengthened Partnerships</h3>
                            <p>Worked closely with stakeholders to ensure accountability and foster equitable water access
                                initiatives.</p>
                        </div>
                        {/* End Single Milestone */}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        {/* Start Single Milestone */}
                        <div className="single-features last">
                            <div className="single-icon">
                                <i className="icofont icofont-flag"></i>
                            </div>
                            <h3>Future Focus</h3>
                            <p>Set the stage for 2025 with plans to deepen impact and innovate sustainable water solutions
                                further.</p>
                        </div>
                        {/* End Single Milestone */}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .single-features {
                    text-align: center;
                    padding: 30px 15px;
                    margin-bottom: 30px;
                    position: relative;
                }

                .single-icon {
                    width: 80px;
                    height: 80px;
                    border: 3px solid #e9ecef;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px auto;
                    background: white;
                    position: relative;
                    z-index: 2;
                    transition: all 0.3s ease;
                }

                .single-features:nth-child(3) .single-icon {
                    background: #87ceeb;
                    border-color: #87ceeb;
                    transform: scale(1.4);
                    box-shadow: 0 8px 20px rgba(135, 206, 235, 0.4);
                    z-index: 10;
                }

                .single-icon i {
                    font-size: 32px;
                    color: #007bff;
                }

                .single-features:nth-child(3) .single-icon i {
                    color: white;
                }

                .single-features h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 15px;
                    line-height: 1.3;
                }

                .single-features p {
                    font-size: 0.9rem;
                    color: #6c757d;
                    line-height: 1.5;
                    margin-bottom: 0;
                }

                @media (max-width: 991px) {
                    .single-features::before {
                        display: none;
                    }
                    
                    .col-lg-2 {
                        margin-bottom: 20px;
                    }
                }

                @media (max-width: 767px) {
                    .single-icon {
                        width: 70px;
                        height: 70px;
                    }
                    
                    .single-icon i {
                        font-size: 28px;
                    }
                    
                    .single-features h3 {
                        font-size: 1rem;
                    }
                    
                    .single-features p {
                        font-size: 0.85rem;
                    }
                }

                @media (max-width: 575px) {
                    .single-features {
                        padding: 20px 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Milestones2024;