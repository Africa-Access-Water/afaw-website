// src/components/WhereWeAreGoing.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaTint,
  FaSeedling,
  FaMoneyBillWave,
  FaUsers,
  FaHome,
  FaChalkboardTeacher,
  FaSolarPanel,
  FaTools,
  FaTractor,
} from "react-icons/fa";

const milestones = [
  { icon: <FaMapMarkerAlt size={40} style={{ color: "var(--secondary)" }} />, text: "10 new project sites" },
  { icon: <FaTint size={40} style={{ color: "var(--secondary)" }} />, text: "30 additional boreholes" },
  { icon: <FaSeedling size={40} style={{ color: "var(--secondary)" }} />, text: "100 hectares under irrigation" },
  { icon: <FaMoneyBillWave size={40} style={{ color: "var(--secondary)" }} />, text: "$300,000 annual combined community income" },
  { icon: <FaUsers size={40} style={{ color: "var(--secondary)" }} />, text: "50,000 people with clean drinking water" },
  { icon: <FaHome size={40} style={{ color: "var(--secondary)" }} />, text: "5,000 households food-secure" },
  { icon: <FaChalkboardTeacher size={40} style={{ color: "var(--secondary)" }} />, text: "8,000 farmers trained" },
  { icon: <FaSolarPanel size={40} style={{ color: "var(--secondary)" }} />, text: "100 farmers adopt solar-powered water systems" },
  { icon: <FaTools size={40} style={{ color: "var(--secondary)" }} />, text: "1 new drilling rig acquired" },
  { icon: <FaTractor size={40} style={{ color: "var(--secondary)" }} />, text: "$250,000 raised for Sustainability Farm" },
];

const WhereWeAreGoing = () => {
  return (
    <section style={{ backgroundColor: "#f5f0e6" }} className="py-5">
      <Container className="text-center">
        <h2 className="fw-bold text-dark mb-3">Where We’re Going</h2>
        <p className="text-secondary mb-5 mx-auto" style={{ maxWidth: "650px" }}>
          We’re building a future where rural communities can grow, earn, and thrive.
        </p>

        <Row className="g-4 justify-content-center mx-auto" style={{ maxWidth: "900px" }}>
          {milestones.map((item, index) => (
            <Col key={index} xs={6} md={6} lg={4}>
              <div className="d-flex align-items-start p-3 w-100 h-100">
                <div className="me-3">{item.icon}</div>
                <p className="mb-0 text-dark">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhereWeAreGoing;
