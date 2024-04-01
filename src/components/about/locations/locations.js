import { Container,Row, Col } from "react-bootstrap";
import './locations.css';
import india from './location_images/india.webp';
import malasia from './location_images/malaysia.png';
import indo from './location_images/Indonesia.webp';

export default  function Locations() {
        return(
            <>
            <Container fluid className="location_container">
                <Row >
                    <Col lg={12}>
                        <div className="big_font locations_head">Global Locations</div>
                    </Col>
                </Row>
                <Row  className="location_row">
                    <Col lg={4} className="location_col">
                        <img src={india} className="location_image" alt="India"/>
                    </Col>
                    <Col lg={4} className="location_col">
                        <img src={malasia} className="location_image" alt="Malaysia"/>
                    </Col>
                    <Col lg={4} className="location_col">
                        <img src={indo} className="location_image" alt="Indonesia"/>
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </Container>
            </>
        );
}