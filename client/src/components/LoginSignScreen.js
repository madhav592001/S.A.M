import React from 'react'
import { Col, Container, Navbar, Row,Form,Button } from 'react-bootstrap'
import logo from './images/logo.png'
import pic from './images/loginsignup.jpg'

function LoginSignScreen() {
  return (
    <div style = {{backgroundColor:"#EDE9E9",width:"100%", height:"100%"}}>
    <div style = {{backgroundColor:"#79B4B7",width:"400px", height:"600px",transform:"translate(50px,-300px) rotate(45deg)"}}></div>
{/* <Container style = {{backgroundColor:"#EDE9E9",width:"80%", height:"100%",borderStyle:"groove"}}>
    <Navbar style = {{backgroundColor:"#EDE9E9", marginBottom: "2%"}}>
    <Navbar.Brand>
            <img src={logo} style={{ width: 200, height: 60 }} alt="pic" />
          </Navbar.Brand>
    </Navbar>
    <Row style = {{paddingBottom:"6%"}}>
        <Col>
        <div style = {{textAlign:"center",fontSize:"240%",fontWeight:"bold",color:"#9F9F9F", marginBottom: "5%"}}>Hospitals Can Register and Update their Details</div>
        <div  style={{display:"flex",justifyContent:"center"}}><img
                src={pic}
                style={{width: 250, height: 250, borderRadius: 200,padding:"2%" }}
                alt="pic"
              />
              </div>
        </Col>
        <Col>
        <div style = {{backgroundColor:"#FFFFFF",width:"80%", height:"100%"}}>
        <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style = {{marginTop:"8%",marginLeft:"2%"}}></Form.Label>
    <Form.Control  style = {{marginLeft:"2%",width:"80%",borderTop:"1px",borderRight:"1px",borderLeft:"1px"}} type="email" placeholder="Enter email" />
    <Form.Text style = {{marginLeft:"2%"}} className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style = {{marginTop:"8%",marginLeft:"2%"}}></Form.Label>
    <Form.Control style = {{marginLeft:"2%",width:"80%",borderTop:"1px",borderRight:"1px",borderLeft:"1px"}} type="password" placeholder="Password" />
  </Form.Group>
  <div style = {{display:"flex",justifyContent:"center"}}><Button style= {{marginTop:"8%",backgroundColor:"#79B4B7",padding:"2% 15%",borderRadius:"22px"}} type="submit">
    Login
  </Button>
  </div>
</Form>
        </div>
        </Col>
    </Row>
</Container> */}
<div style = {{backgroundColor:"#9D9D9D",width:"600px", height:"400px",transform:"translate(1050px,30px) rotate(-45deg)"}}></div>
    </div>
  )
}

export default LoginSignScreen