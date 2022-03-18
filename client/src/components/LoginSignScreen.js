import React from 'react'
import { Col, Container, Navbar, Row, Form, Button, ToggleButton } from 'react-bootstrap'
import logo from './images/logo.png'
import pic from './images/loginsignup.jpg'
import {Link} from 'react-router-dom'
import ToggleSwitch from './ToggleSwitch'


function LoginSignScreen() {
  return (
    <Container fluid
      className="pb-md-5 pt-md-4"
      style={{
        backgroundColor: '#EDE9E9',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          backgroundColor: '#79B4B7',
          width: '400px',
          height: '600px',
          transform: 'translate(50px,-300px) rotate(45deg)',
          position: 'absolute',
        }}
      ></div>
      <Container
        className="lg-mb-4 mb-md-5 mt-md-5 pt-md-2 pb-md-4  mt-5 mb-5 lg-pb-4 "
        style={{
          backgroundColor: '#EDE9E9',
          width: '80%',
          height: '100%',
          position: 'relative',
          zIndex: '5',
        }}
      >
        <Navbar
          style={{
            backgroundColor: '#EDE9E9',
            marginBottom: '2%',
            position: 'relative',
            zIndex: '5',
          }}
        >
          <Link to='/'><Navbar.Brand>
            <img
              className="mb-md-4 mt-md-3 "
              src={logo}
              style={{ width: "90%", height: "auto" }}
              alt="pic"
            />
          </Navbar.Brand></Link>
        </Navbar>
        <Row style={{ paddingBottom: '6%', position: 'relative', zIndex: '5' }}>
          <Col xs = {12} md = {12} lg = {6}>
            <div
              style={{
                textAlign: 'center',
                fontSize: '220%',
                fontWeight: 'bold',
                color: '#9F9F9F',
                marginBottom: '5%',
              }}
            >
              Hospitals Can Register and Update their Details
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={pic}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 200,
                  padding: '2%',
                }}
                alt="pic"
              />
            </div>
          </Col>
          <Col>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                width: '80%',
                height: '100%',
                marginLeft:"auto",
                marginRight:"auto",
                marginTop:"2%",
                paddingBottom:"4%"
              }}
            >
              {/* <Button
                    style={{
                      marginLeft: '2%',
                      marginTop: '5%',
                      backgroundColor: '#79B4B7',
                      padding: '1% 15%',
                      borderRadius: '22px',
                      fontSize:"90%"
                    }}
                    type="submit"
                  >
                    Login
                  </Button> */}
                  <div  style={{paddingTop:"4%",marginLeft:"2%"}}><ToggleSwitch/></div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{ marginTop: '8%', marginLeft: '2%' }}
                  ></Form.Label>
                  <Form.Control
                    style={{
                      marginLeft: '2%',
                      width: '80%',
                      borderTop: '1px',
                      borderRight: '1px',
                      borderLeft: '1px',
                    }}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text
                    style={{ marginLeft: '2%',fontSize:"70%" }}
                    className="text-muted"
                  >
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    style={{ marginTop: '8%', marginLeft: '2%' }}
                  ></Form.Label>
                  <Form.Control
                    style={{
                      marginLeft: '2%',
                      width: '80%',
                      borderTop: '1px',
                      borderRight: '1px',
                      borderLeft: '1px',
                    }}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{
                      marginTop: '8%',
                      backgroundColor: '#79B4B7',
                      padding: '2% 15%',
                      borderRadius: '22px',
                      fontSize:"100%"
                    }}
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          backgroundColor: '#9D9D9D',
          width: '700px',
          height: '500px',
          transform: 'translate(1050px,30px) rotate(-45deg)',
          position: 'absolute',
          top: '28rem',
          right: '47rem',
        }}
      ></div>
    </Container>
  )
}

export default LoginSignScreen