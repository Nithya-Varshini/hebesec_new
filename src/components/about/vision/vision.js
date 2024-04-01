import { Container,Row, Col } from "react-bootstrap";

import './vision.css';

export default function Vision() {
    return(
        <>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="vision_box">
                    <div className="big_font vision_head">Vision</div>
                    <div className="small_font">We aspire to be a leading force in Global market for Cyber Security and Training Services. Our strategy involves educating business professionals about cyber threats, deploying cutting-edge technology for effective defense, and offering 24/7 remote and on-site support in the battle against cybercrime.</div>
                    </div>
                </Col>
                <Col lg={6} >
                <div className="vision_box">
                    <div className="big_font vision_head">Mission</div>
                    <div className="small_font">We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations. Our proactive measures and execution control ensure organizations achieve high returns on initial capital investment, all while adhering to best business practices for our clients' benefit.</div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}