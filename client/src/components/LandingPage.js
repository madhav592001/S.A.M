import React from 'react'
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBedPulse, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import pic from './images/pic.jpeg'
function LandingPage() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        style={{ backgroundColor: '#fff' }}
      >
        <Container>
          <Navbar.Brand>
            <img src={logo} style={{ width: '110%', height: 60 }} alt="pic" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
         <Link to='/log' style={{textDecoration:"none"}}><Nav.Link href="#contactus">Login/SignUp</Nav.Link></Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* //Main */}

      <Container>
        <Row>
          <Row className="d-inline-flex align-items-center">
            <Col className="ms-5 mt-5 pe-5">
              <h1 className="text-black-50" style={{ fontSize: '2.5rem' }}>
                <strong>
                  Get all the Info of Available Facilities of any Hospital
                </strong>
              </h1>
              <h6 className="text-black-50">
                All required Information regarding available beds, available
                equipments, medical expenses as per different hospitals are
                available here, you can decide accordingly and it help you to
                choose best for you accordingly
              </h6>
              <Link to="/hospitalsearch">
                <Button
                  className="mt-5"
                  style={{ backgroundColor: '#79B4B7', borderRadius: '20px' }}
                >
                  Get Information
                </Button>
              </Link>
            </Col>

            <Col className="me-5 mt-5 ps-5">
              <img
                src={pic}
                style={{ width: 300, height: 300, borderRadius: 200 }}
                alt="pic"
              />
            </Col>
          </Row>
          <Row className="mb-5">
            <h1
              className="text-black-50 text-center mt-5 mb-5"
              style={{ fontSize: '2.5rem' }}
            >
              Features
            </h1>
            <Col
              className="me-4 ms-4 p-2 mt-2"
              style={{ backgroundColor: '#F8F0DF', borderRadius: '50px' }}
            >
              <h1 className="text-center mt-3">
                <FontAwesomeIcon icon={faBedPulse} />
              </h1>
              <h3 className="text-center mt-3">Available Beds</h3>
              <p className="text-center mt-1">
                Available beds in General, ICU and other in an hospital can be
                check from here
              </p>
            </Col>
            <Col
              className="me-4 ms-4 mt-2"
              style={{ backgroundColor: '#F8F0DF', borderRadius: '50px' }}
            >
              <h1 className="text-center mt-3">
                <FontAwesomeIcon icon={faBedPulse} />
              </h1>
              <h3 className="text-center mt-3">Available ventilator</h3>
              <p className="text-center mt-1">
                Available beds in General, ICU and other in an hospital can be
                check from here.
              </p>
            </Col>  

            <Col
              className="me-4 ms-4 mt-2"
              style={{ backgroundColor: '#F8F0DF', borderRadius: '50px' }}
            >
              <h1 className="text-center mt-3">
                <FontAwesomeIcon icon={faUserDoctor} />
              </h1>
              <h3 className="text-center mt-3">Doctor Fee</h3>
              <p className="text-center mt-1">
                Available beds in General, ICU and other in an hospital can be
                check from here
              </p>
            </Col>
          </Row>
        </Row>
      </Container>

      {/* Footer */}

      <Row className="pb-3" style={{ backgroundColor: '#79B4B7' }}>
        <Col id="about">
          <Container className="text-center">
            <h5 className="pt-5 ms-5" style={{ color: '#F8F0DF' }}>
              About
            </h5>
            <p className=" ms-5" style={{ color: '#fff' }}>
              Provide Information related to available facilities of hospitals.{' '}
            </p>
          </Container>
        </Col>

        <Col id="contactus">
          <Container className="text-center">
            <h5 className="pt-5 " style={{ color: '#F8F0DF' }}>
              Contact Us
            </h5>
            <p className="" style={{ color: '#fff' }}>
              +91 9483232828
            </p>
            <p className=" " style={{ color: '#fff', lineHeight: '0rem' }}>
              email@gmail.com
            </p>
          </Container>
        </Col>

        <Col>
          <Container className="me-5">
            <h5
              className="text-center me-5"
              style={{ color: '#F8F0DF', paddingTop: '5rem' }}
            >
              Feedback Form
            </h5>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage
