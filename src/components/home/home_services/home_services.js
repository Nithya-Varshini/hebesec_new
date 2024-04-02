import {Container, Row, Col} from 'react-bootstrap';
import './home_services.css';

export default function HomeServices() {
    return(
        <>
        <Container fluid >
            <Row className="home_services">
                <Col lg={12}>
                    <div className="big_font home_services_head">Our Services</div>
                </Col>
                <Col lg={4}>
                    <div className="home_services_box">
                        <div className="big_font home_services_head1">CYBER DEFENCE SERVICE<br></br></div>
                        <div className="small_font">We prioritize ethical innovation, ensuring security solutions are advanced with integrity at their core.</div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="home_services_box">
                        <div className="big_font home_services_head1">CYBER SECURITY ASSESSMENT SERVICES</div>
                        <div className="small_font">A cyber security company leveraging unity to accelerate innovation and strengthen digital defences
with integrity.
</div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="home_services_box">
                        <div className="big_font home_services_head1">INFORMATION SECURITY PRODUCTS & SERVICES
</div>
                        <div className="small_font">Through transparency, we cultivate trust and strengthen cyber defences for a secure digital landscape.
</div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}