import React from 'react';

const HowItWorks = () => {
    return (
        <div className="container-xxl pb-5">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Our Process</div>
                    <h1 className="display-5 mb-4 fw-bold text-dark">HOW IT WORKS</h1>
                </div>

                {/* Hero Image Section */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center wow fadeInUp" data-wow-delay="0.2s">
                        <div
                            className="position-relative overflow-hidden rounded shadow-lg mb-4 d-flex justify-content-center"
                            style={{ maxWidth: '450px', margin: '0 auto' }}
                        >
                            <img
                                src="/img/howitworks.jpg"
                                alt="Community working together on water infrastructure project"
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>
                        <p className="text-muted fst-italic">
                            Our process transforms rural productivity and livelihoods through innovative solutions.
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <img
                        src="/img/canvas1.png"
                        alt="Community working together on water infrastructure project"
                        className="img-fluid"
                        style={{ width: '90%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
            </div>


        </div>
    );
};

export default HowItWorks;