import { Container, Row, Col } from "react-bootstrap";
import './values.css';
import '../vision/vision.css';

export default function Values() {
    const visionData = [
        {
          title: "Innovation with Integrity",
          description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
        },
        {
          title: "Transparency fosters trust",
          description: "We aspire to be a leading force in the global market for cyber security and training services."
        },
        {
          title: "Solidarity as a Catalyst",
          description: "Our values drive our commitment to excellence, integrity, and innovation. "
        },
        {
          title: "Empowerment through Education",
          description: "Our goal is to establish long-term partnerships with our clients, built on trust, transparency, and mutual respect. "
        },
        {
            title: "Innovation with Integrity",
            description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
          },
          {
            title: "Transparency fosters trust",
            description: "We aspire to be a leading force in the global market for cyber security and training services."
          }
        // Add more vision boxes as needed
      ];
      
    return(
        <>
        <Container fluid> 
            <Row>
                <Col lg={12}>
                    <div className="big_font values_head">Core Values</div>
                </Col>
                {visionData.map((vision, index) => (
        <Col lg={3} key={index}>
          <div className="valuesbox">
            <div className="big_font valueshead">{vision.title}</div>
            <div className="small_font">{vision.description}</div>
          </div>
        </Col>
      ))}
            </Row>
        </Container>
        </>
    );
}