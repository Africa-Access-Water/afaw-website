import React from 'react';
import WhyWeExist from './WhyWeExist';

const WhoWeAre = ({ image, smallImage, title, quote, description, buttons }) => {
  return (
    <section className='text-center'>
     
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        
        </div>   
        <div className="container-xxl">
                    <div className="container py-4">
                        <div
                            className="text-center mx-auto"
                            style={{ maxWidth: "800px" }}
                        >
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                               Who We Are
                            </div>
                            <h1 className="display-6 mb-4">
                            Empowering Rural Africa Through Solar-Powered Water Solutions
                            </h1>
                            <p>Africa Access Water exists because one truth became impossible to ignore:</p>
                            <div className=" text-center mx-auto bg-light border-bottom border-5 border-primary rounded p-4 mb-4" style={{ maxWidth: "500px" }}>
                    <p className="text-muted mb-2">
                        "Water is the foundation of life and opportunity...
                         when rural communities have access to clean, sustainable water, they rise
                        beyond poverty and hunger."
                    </p>
                    <span className="text-primary">Rodney Katongo, Co-Founder & CEO</span>
                </div>
                            <p className="text">                                 
                                  In 2017, founders Rodney Katongo and Paul Kapanda began promoting solar-powered water systems in rural Zambia. 
                                  But the more they worked in villages across the country, the clearer the picture became:
                                    <span className="text-primary"> poverty, hunger, climate vulnerability, and gender inequality </span>
                                     were all rooted in water scarcity.
                                  <br /> <br />  So in 2019, Africa Access Water was registered as a non-profit dedicated to one mission:
                            </p>
                             <div className=" text-center mx-auto bg-light border-bottom border-5 border-primary rounded p-4 mb-4" style={{ maxWidth: "700px" }}>
                    <p className="text-muted mb-2">
                       Deliver solar-powered water systems that empower rural communities to grow food, build income, and break free from climate-driven poverty.
                    </p>
                </div>
                             {/* <a className="btn btn-outline-primary py-2 px-3" href="/contact">
                    Contact Us
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                    </div>
                </a> */}
                            
                        </div>
                        </div>
                        </div>
                          <WhyWeExist/>
    </section>
  
  );
};

export default WhoWeAre;
