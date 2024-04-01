import { Col, Container,Row } from "react-bootstrap";
import './about.css';

import Customer from './customer/customer';
import Vision from './vision/vision'
import Values from './values/values';
import Locations from "./locations/locations";
import establishment from  "./establishment"
import Establishment from "./establishment";
import Certifications from './customer/certificates'
import Footer from './footer.js'


export default function About() {
    return (
      <>
      <Container fluid className="about_header">
        <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <h1 className="big_font about_content">About Us Be Safe, We Make System Secured</h1>
        </Col>
        <Col lg={2}></Col>
        </Row>
        </Container>
        <div className='about_scroll'>
        <Customer />
        </div>
        <Vision />
        <Values />
        <Locations />
        <Establishment />
        <div className='about_scroll'>
        <Certifications />
        </div>
        <Footer />
      </>
    );
}