import { Container,Col,Row } from "react-bootstrap";
import './home.css';

import HomeServices from "./home_services/home_services";
import HomeProducts from "./home_products/home_products";
import Establishment from "./achievement/achievement";
import Partners from "./partners/partners";
import Conceltency from "./conceltency/conceltency";
import Test from "./test";
import Footer from "../about/footer";

export default function Home() {
    return (
      <>
        <Container fluid className="home_head">
          <Row>
            <Col lg={8}>
              <div className="big_font home_content">
                We Provide <span style={{color:"#F2A81D"}}>Cyber</span> Solutions For Your Security
              </div>
              <div className="small_font home_content1">At lectus et tristique tellus a faucibus nec pellent
esque arcu.</div>
            </Col>
            <Col lg={4}>
              </Col>
          </Row>
          
        </Container>
        <HomeServices />
        <HomeProducts />
        <Test />
        <Establishment />
        <Partners />
        <Conceltency />
        <Footer />
        
      </>
    );
}