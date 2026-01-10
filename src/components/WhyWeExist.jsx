import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import WhereWeAreGoing from "./WhereWeAreGoing";

 const steps = [
        {
          icon: <FaCheck size={20}  style={{ color: "var(--dark)" }}/>,
          title: "Solar-powered irrigation for food production",
        },
        {
          icon: <FaCheck size={20}  style={{ color: "var(--dark)" }} />,
          title: "Clean drinking water for households",
        },
        {
          icon: <FaCheck size={20}  style={{ color: "var(--dark)" }} />,
          title: "Water access for livestock",
        },
       
      ];

const WhyWeExist = () => {
  return (
    <>
    <section className="py-5 bg-dark" >
      <Container>
        <Row className="align-items-center">
          
          {/* IMAGE on LEFT for large screens, below text on small */}
          <Col 
            md={6} 
            className="order-2 order-lg-1"
          >
            <Image
              src="/img/wwd3.jpg"
              alt="Community Partnership"
              fluid
              rounded
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
          </Col>

          {/* TEXT on RIGHT for large screens, above image on small */}
          <Col 
            md={6} 
            className="order-1 order-lg-2"
          >
            <h2 className="text-light fw-bold mb-4">Why We Exist</h2>
            <p className="text-muted" style={{ lineHeight: "1.7" }}>
              Across Africa, especially in Zambia, millions rely on rain-fed agriculture. Climate change is shrinking growing seasons, destroying crops, and threatening livelihoods.
Women and youth bear the heaviest burden.
<br />
Despite this, most water-focused organizations work only on clean drinking water.
But drinking water alone doesn’t build income, create food security, or grow communities into resilience.
<br />
This is the gap we fill.
            </p>
          </Col>

        </Row>
      </Container>
    </section>
     
    <section className="container" style={{ backgroundColor: "var(--light)", padding: "60px 20px" }}>
      <Container>
        <h2 className="text-dark fw-bold text-center mb-5">Our Unique Approach</h2>
        <p  className="text-dark text-center mb-5" >We are one of the few organizations in Africa providing:</p>
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col key={index} md={4}>
              <div className="d-flex flex-column  text-center text-md-center">
                <div
                  className="d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{
                    backgroundColor: "var(--secondary)",
                    border:"2px solid var(--dark)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  {step.icon}
                </div>

                <div>
                  <h5 className="fw-bold text-dark">{step.title}</h5>
                  <p className=" mb-0">{step.text}</p>
                </div>
              </div>
             
            </Col>
          ))}
        </Row>
         <p className="text-dark text-center mt-5">All in one integrated system. Designed to lift families out of poverty in <span className="fw-bold"> as little as three months.</span>
                <br /> <br />

Our model turns  <span className="fw-bold">water into income, income into security</span> , and  <span className="fw-bold">security into dignity.</span></p>
      </Container>
    </section>
   {/* our vision and mission */}
   <section className="mt-5 py-4 bg-dark text-white">
            <div className="row m-5">
                <div className="col-lg-6 col-12 mt-5">
                    <div className="single-features">
                        <div className="signle-icon text-primary fs-1">
                            <i className="icofont icofont-eye-alt"></i>
                        </div>
                        <h2 className="text-white">Our Vision</h2>
                        <p>African communities developed through solar-powered water.</p>
                    </div>

                </div>
                <div className="col-lg-6 col-12 mt-5">
                    <div className="single-features last">
                        <div className="signle-icon text-primary fs-1">
                            <i className="icofont icofont-flag"></i>
                        </div>
                        <h2 className="text-white">Our Mission</h2>
                        <p>To equip rural communities in Zambia and Africa with solar-powered water infrastructure and
                            systems for
                            productive use, food security, and socio-economic development.</p>
                    </div>

                </div>

            </div>
            </section>
            <WhereWeAreGoing/>
    </>
  );
};

export default WhyWeExist;
