import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './conceltency.css'; // Assuming the CSS file is in the same directory

export default function Conceltency() {
  

  return (
    <>
    <Container fluid> 
      <Row className="concelt123">
        <Col lg={8} className="concelt_row">
          <div className="concelt_text">
            <strong>Explore How HebeSec Can Become Your Digital Guard!</strong>
          </div>
          <div className="concelt_text1">
            Find out from our cyber-security experts on a <strong>FREE</strong> consultation call
          </div>
        </Col>
        <Col lg={4}>
            <br></br>
            <button className="concelt_button">Book a Call</button>
        </Col>
      </Row>
    </Container>
    
    </>
  );
}
