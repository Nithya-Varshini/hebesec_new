import { Container, Row, Col } from "react-bootstrap";
import './home_products.css';
import product from '../images/product.png'

export default function HomeProducts() {
    return(
        <>
        <Container>
            <Row>
                <Col lg={8} className="prod_col">
                    <div className="big_font home_products_head">Our Products</div>
                    <div className="small_font home_products_head1">Explore Our Products: Discover Our Advanced Application Security Tool, Dedicated to Safeguarding Your Digital Assets from Cyber Threats. In today's interconnected landscape, securing your applications is crucial, and our tool provides tailored solutions to meet your security requirements. Count on our continuous support to maintain your applications' security</div>
                </Col>
                <Col lg={4}>
                    <img src={product} alt="product" className="prod_img"/>
                </Col>
            </Row>
        </Container>
        </>
    );
}