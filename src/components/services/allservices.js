import { Container,Col,Row } from "react-bootstrap";
import '../about/vision/vision.css';

export default function AllServices() {
    
        const visionData = [
        {
          title: "Security Policies and Procedures",          
          description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
        },
        {
          title: "Cloud Security",
          description: "We aspire to be a leading force in the global market for cyber security and training services."
        },
        {
          title: "Endpoint Security",
          description: "Our values drive our commitment to excellence, integrity, and innovation. "
        },
        {
          title: "Incident Management",
          description: "Our goal is to establish long-term partnerships with our clients, built on trust, transparency, and mutual respect. "
        },
        {
            title: "Continuous Monitoring & Logging",
            description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
          },
          {
            title: "Vulnerability Management",
            description: "We aspire to be a leading force in the global market for cyber security and training services."
          },
          {
            title: "Threat Intel ",
            description: "Our goal is to establish long-term partnerships with our clients, built on trust, transparency, and mutual respect. "
          },
          {
              title: "IAM",
              description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
            }
        // Add more vision boxes as needed
      ];
      const visionData1 = [
        {
          title: "Vulnerability Assessment & Penetration Test",
          description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
        },
        {
          title: "External Vulnerability Assessment & Penetration Test",
          description: "We aspire to be a leading force in the global market for cyber security and training services."
        },
        {
          title: "Internal Vulnerability Assessment & Penetration Test",
          description: "Our values drive our commitment to excellence, integrity, and innovation. "
        },
        {
          title: "Web Application Security Test ",         
          description: "Our goal is to establish long-term partnerships with our clients, built on trust, transparency, and mutual respect. "
        },
        {
            title: "Host Assessment",
            description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
          },
          {
            title: "Mobile Application Security Test",
            description: "We aspire to be a leading force in the global market for cyber security and training services."
          },
          {
              title: "Servers and Network Appliances Assessment & Audit",
              description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
            }
        // Add more vision boxes as needed
      ];
      const visionData2 = [
        {
          title: "Information Security Management System",          description: "We maximize cyber security to mitigate risks, neutralize threats, and protect online experiences for individuals and organizations."
        },
        {
          title: "Information Security Awareness Training",
          description: "We aspire to be a leading force in the global market for cyber security and training services."
        },
        {
          title: "Information Security Policy Development",
          description: "Our values drive our commitment to excellence, integrity, and innovation. "
        }
      ];
      
    return(
        <>
        <br></br>
        <Container fluid>
            <Row>
            <Col lg={12}>
                    <div className="big_font values_head">CYBER DEFENCE
SERVICE
</div>
                </Col>
                {visionData.map((vision, index) => (
        <Col lg={4} key={index}>
          <div className="values_box">
            <div className="big_font vision_head">{vision.title}</div>
            <div className="small_font">{vision.description}</div>
            <br></br>
            <button className="concelt_button">Read More</button>
          </div>
        </Col>
      ))}
            </Row>
        </Container>
        <Container fluid>
            <Row>
            <Col lg={12}>
                    <div className="big_font values_head">CYBER SECURITY ASSESSMENT 
SERVICES
</div>
                </Col>
                {visionData1.map((vision, index) => (
        <Col lg={4} key={index}>
          <div className="values_box">
            <div className="big_font vision_head">{vision.title}</div>
            <div className="small_font">{vision.description}</div>
            <br></br>
            <button className="concelt_button">Read More</button>
          </div>
        </Col>
      ))}
            </Row>
        </Container>
        <Container fluid>
            <Row>
            <Col lg={12}>
                    <div className="big_font values_head">INFORMATION SECURITY PRODUCTS & SERVICES

</div>
                </Col>
                {visionData2.map((vision, index) => (
        <Col lg={4} key={index}>
          <div className="values_box">
            <div className="big_font vision_head">{vision.title}</div>
            <div className="small_font">{vision.description}</div>
            <br></br>
            <button className="concelt_button">Read More</button>
          </div>
        </Col>
      ))}
            </Row>
        </Container>
        </>
    )
}