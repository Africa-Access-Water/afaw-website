import React from 'react';

const Sponsors = ({ sponsors = [] }) => {
    // Default sponsor logos with placeholders
    const defaultSponsors = [
        { id: 1, name: "Sponsor 1", logo: "/img/sponsor1.png" },
        { id: 2, name: "Sponsor 2", logo: "/img/sponsor2.png" },
        { id: 3, name: "Sponsor 3", logo: "/img/sponsor3.png" },
        { id: 4, name: "Sponsor 4", logo: "/img/sponsor4.png" },
        { id: 5, name: "Sponsor 5", logo: "/img/sponsor5.png" },
        { id: 6, name: "Sponsor 6", logo: "/img/sponsor6.png" },
        { id: 7, name: "Sponsor 7", logo: "/img/sponsor7.png" },
        { id: 8, name: "Sponsor 8", logo: "/img/sponsor8.png" },
        { id: 9, name: "Sponsor 9", logo: "/img/sponsor9.png" },
        { id: 10, name: "Sponsor 10", logo: "/img/sponsor10.png" },
    ];

    const sponsorList = sponsors.length > 0 ? sponsors : defaultSponsors;
    
    return (
        <div className="container-xxl py-5 bg-white">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
                    <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Our Partners</div>
                    <h1 className="display-6" style={{ whiteSpace: 'nowrap', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Trusted by Leading Organizations</h1>
                </div>
                
                <div className="sponsors-scroll-container">
                    <div className="sponsors-scroll">
                        {/* Triple the sponsors list for seamless infinite scroll */}
                        {[...sponsorList, ...sponsorList, ...sponsorList].map((sponsor, index) => (
                            <div key={`${sponsor.id}-${index}`} className="sponsor-item">
                                <img 
                                    src={sponsor.logo} 
                                    alt={sponsor.name}
                                    className="sponsor-logo"
                                    onError={(e) => {
                                        // Fallback to placeholder if image fails to load
                                        e.target.src = "https://via.placeholder.com/300x160?text=" + encodeURIComponent(sponsor.name);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* NGO Source Certification Section */}
                <div className="text-center mt-5 pt-4">
                    <div className="ngo-certification">
                        <img 
                            src="/img/ngo.jpg" 
                            alt="NGO Source Equivalency Determination" 
                            className="ngosource-logo"
                        />
                        <h3 className="certification-text mt-3">Certified Public Charity</h3>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .sponsors-scroll-container {
                    overflow: hidden;
                    width: 100%;
                    background: transparent;
                    padding: 0;
                    position: relative;
                }
                
                .sponsors-scroll {
                    display: flex;
                    align-items: center;
                    animation: infiniteScroll 30s linear infinite;
                    width: calc(200px * ${sponsorList.length * 2});
                    will-change: transform;
                }
                
                .sponsor-item {
                    flex: 0 0 200px;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .sponsor-logo {
                    max-width: 450px;
                    max-height: 240px;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    filter: opacity(1);
                    transition: all 0.3s ease;
                }
                
                .sponsor-logo:hover {
                    transform: scale(1.1);
                }
                
                @keyframes infiniteScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-400px * ${sponsorList.length}));
                    }
                }
                
                @media (max-width: 768px) {
                    .sponsors-scroll {
                        animation: infiniteScrollMobile 30s linear infinite;
                        width: calc(250px * ${sponsorList.length * 3});
                    }
                    
                    .sponsor-item {
                        flex: 0 0 250px;
                        padding: 0 25px;
                    }
                    
                    .sponsor-logo {
                        max-width: 200px;
                        max-height: 100px;
                    }
                }
                
                @keyframes infiniteScrollMobile {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-250px * ${sponsorList.length}));
                    }
                }
                
                .ngo-certification {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 0;
                }
                
                .ngosource-logo {
                    max-width: 1000px;
                    max-height: 300px;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    transition: all 0.3s ease;
                }
                
                .ngosource-logo:hover {
                    transform: scale(1.05);
                }
                
                .certification-text {
                    font-size: 2rem;
                    font-weight: 600;
                    color: #4285f4;
                    margin: 0;
                    text-align: center;
                }
                
                @media (max-width: 1200px) {
                    .ngosource-logo {
                        max-width: 800px;
                        max-height: 240px;
                    }
                }
                
                @media (max-width: 992px) {
                    .ngosource-logo {
                        max-width: 700px;
                        max-height: 210px;
                    }
                }
                
                @media (max-width: 768px) {
                    .ngosource-logo {
                        max-width: 600px;
                        max-height: 180px;
                    }
                    
                    .certification-text {
                        font-size: 1.2rem;
                    }
                }
                
                @media (max-width: 576px) {
                    .ngosource-logo {
                        max-width: 450px;
                        max-height: 135px;
                    }
                    
                    .certification-text {
                        font-size: 1.1rem;
                    }
                }
                
                @media (max-width: 400px) {
                    .ngosource-logo {
                        max-width: 350px;
                        max-height: 105px;
                    }
                    
                    .certification-text {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Sponsors;