// src/components/HowWeWork.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaHandsHelping, FaWater, FaSeedling, FaCoins, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaMapMarkerAlt size={50}  style={{ color: "var(--secondary)" }}/>,
    title: "Listen & Identify",
    text: "We start by listening. Using climate data and community surveys, we identify the areas most affected by water scarcity."
  },
  {
    icon: <FaHandsHelping size={50}  style={{ color: "var(--secondary)" }} />,
    title: "Plan with the Community",
    text: "Together with local leaders and residents, we co-create a plan, ensuring communities are partners, not just recipients."
  },
  {
    icon: <FaWater size={50}  style={{ color: "var(--secondary)" }} />,
    title: "Build Sustainable Water Systems",
    text: "From boreholes to solar-powered pumps, we construct systems that last, bringing clean water to homes, farms, and livestock."
  },
  {
    icon: <FaSeedling size={50}  style={{ color: "var(--secondary)" }} />,
    title: "Empower & Train",
    text: "Access to water is just the start. We train farmers in climate-smart agriculture, empower women, and involve youth."
  },
  {
    icon: <FaCoins size={50}  style={{ color: "var(--secondary)" }} />,
    title: "Create Community Funds",
    text: "A portion of produce and income goes into a community fund for maintenance, new projects, and community self-reliance."
  },
  {
    icon: <FaChartLine size={50}  style={{ color: "var(--secondary)" }} />,
    title: "Measure & Share Impact",
    text: "We track results: food security, income growth, and improved livelihoods. Transparency matters."
  },
];

const HowWeWork = () => {
  return (
    <section style={{ backgroundColor: '#f5f0e6' }}>
      <Container>

        <Row className="g-4 p-5">
          {steps.map((step, index) => (
            <Col key={index} xs={12} md={4}>
              <div className="d-flex align-items-start p-3 h-100">
                <div className="me-3">
                  {step.icon}
                </div>
                <div>
                  <h5 className="fw-bold">{step.title}</h5>
                  <p className="text fs-8 mb-0">{step.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowWeWork;
