import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const CommunityPartnership = () => {
  return (
    <section className="py-5 bg-dark" >
      <Container>
        <Row className="align-items-center">
          
          {/* IMAGE on LEFT for large screens, below text on small */}
          <Col 
            md={6} 
            className="order-2 order-lg-1"
          >
            <Image
              src="/img/community4.jpg"
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
            <h2 className="text-light fw-bold mb-4">Community Partnership</h2>
            <p className="text-muted" style={{ lineHeight: "1.7" }}>
              Sustainable impact starts with the people. We work hand-in-hand 
              with communities, listening, learning, and co-creating solutions 
              that last. Together, we build systems that strengthen health, 
              improve access, and uplift livelihoods for generations.
            </p>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default CommunityPartnership;
