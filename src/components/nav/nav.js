import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, Link } from "react-router-dom";
import logo from "./about/images/whit-elogo.png";
import newImage from "./about/images/new1.png";
import './nav.css';
import { useEffect, useState } from 'react';

function OffcanvasExample() {

    const [logoSrc, setLogoSrc] = useState(logo);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && logoSrc !== newImage) {
        setLogoSrc(newImage); // Change to the second image when scrolled
      } else {
        setLogoSrc(logo); // Change back to the first image when not scrolled
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  window.addEventListener('scroll', function () {
    var header = document.querySelector('.navbar');
    var texts = document.querySelectorAll('.wow');
    if (header && texts) {
      if (window.scrollY > 0 && texts.length > 0) {
        header.classList.add('header-scroll');
        texts.forEach(function (text) {
          text.classList.add('text-scroll');
        });
        // Change image source on scroll
        // Replace 'new_image_src_on_scroll.jpg' with the actual image source
      } else {
        header.classList.remove('header-scroll');
        texts.forEach(function (text) {
          text.classList.remove('text-scroll');
        });
        // Reset image source when not scrolled
        // Replace 'original_image_src.jpg' with the original image source
      }
    }
  });
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="offcanvasNavbarDropdown-expand-lg"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
