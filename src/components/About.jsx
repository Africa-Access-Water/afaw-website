import React from 'react';

const About = ({ image, smallImage, title, quote, description, buttons }) => {
  return (
    <>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="position-relative overflow-hidden h-100" style={{ minHeight: "400px" }}>
                <img className="position-absolute w-100 h-100 pt-5 pe-5" src="img/solar.jpg" alt="Solar Water Project" style={{ objectFit: "cover" }} />
                <img className="position-absolute top-0 end-0 bg-white ps-2 pb-2" src="img/happy-produce.jpg" alt="Women Farmers" style={{ width: "200px", height: "200px" }} />
            </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">About Us</div>
                <h1 className="display-6 mb-5">Empowering Rural Africa Through Solar-Powered Water Solutions</h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                    <p className="text-dark mb-2">
                        "Water is the foundation of life and opportunity. At Africa Access Water, we believe
                        that when rural communities have access to clean, sustainable water, they can rise
                        beyond poverty and hunger."
                    </p>
                    <span className="text-primary">Rodney Katongo, Co-Founder & CEO</span>
                </div>
                <p className="mb-5">
                    Africa Access Water (AfAW) is a nonprofit organization based in Zambia, founded in 2019.
                    We implement solar-powered water infrastructure to help communities achieve food
                    security, increase income, and build resilience to climate change. Our programs empower
                    women, youth, and farmers across Zambia and beyond.
                </p>
                <a className="btn btn-primary py-2 px-3 me-3" href="about.html">
                    Learn More
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                    </div>
                </a>
                <a className="btn btn-outline-primary py-2 px-3" href="contact.html">
                    Contact Us
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </div>     
    </>
  );
};

export default About;
