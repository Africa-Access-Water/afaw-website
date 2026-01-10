import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const steps = [
  {
    number: 1,
    title: "Discover Needs",
    text: "We start by identifying communities most affected by water scarcity using data and surveys."
  },
  {
    number: 2,
    title: "Plan & Partner",
    text: "We work with local leaders and residents to equip rural communities with Solar powered water infrastructure."
  },
  {
    number: 3,
    title: "Implement",
    text: "From boreholes to solar-powered pumps, we build water systems that empower communities and improve livelihoods by increasing Agricultural and Community productivity."
  },
  {
    number: 4,
    title: "Impact",
    text: "Improved livelihoods and rural economy from food security and increased household income."
  }
];

const Process = () => {
  return (
    <section className="container" style={{ backgroundColor: "var(--light)", padding: "60px 20px" }}>
      <Container>
        <h2 className="text-dark fw-bold text-center mb-5">Our Process</h2>
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col key={index} md={3}>
              <div className="d-flex flex-column  text-center text-md-center">
                <div
                  className="d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>

                <div>
                  <h5 className="fw-bold text-dark">{step.title}</h5>
                  <p className=" mb-0">{step.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Process;
