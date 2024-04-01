import {Container,Row,Col} from 'react-bootstrap';
import '../about/about.css';
import './services.css';


import Footer from '../about/footer';
import AllServices from './allservices';

export default function Services() {
    return(
        <>
        <Container fluid className="about_header">
        <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <h1 className="big_font about_content">Our Services</h1>
        </Col>
        <Col lg={2}></Col>
        </Row>
        </Container>
        <AllServices />
        <Footer />
        </>
    );
}