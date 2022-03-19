import React, { useState } from 'react'
import { Col, Container, Navbar, Row, Form, Button, ToggleButton } from 'react-bootstrap'
import './ToggleSwitch.css'

function ToggleSwitch() {
    const [val,setVal] = useState(0);
    const name1 = "Login";
    const name2 = "SignUp";
  const change = ()=>{
      if(val === 0)
      setVal(1);
      else
      setVal(0);
      console.log(val);
  }
  if(val === 1)
  {
      return <div
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
          <div  style={{paddingTop:"4%",marginLeft:"2%"}}>
          <span className="parentclicked"> {name1} 
        <span className = "oneclicked" onClick={change}>
         {name2} </span> </span>
          </div>
      <Form>
      <Form.Group className="mb-3">
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
          type="text"
          placeholder="Enter Name"
        />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
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
              marginTop: '1%',
              backgroundColor: '#79B4B7',
              padding: '1.5% 10%',
              borderRadius: '22px',
              fontSize:"90%"
            }}
            type="submit"
          > Get OTP
          </Button>
        </div>
        <Form.Group className="mb-3">
          <Form.Control
            style={{
              marginLeft: '2%',
              width: '80%',
              borderTop: '1px',
              borderRight: '1px',
              borderLeft: '1px',
            }}
            type="text"
            placeholder="Enter OTP"
          />
        </Form.Group>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{
              marginTop: '1%',
              backgroundColor: '#79B4B7',
              padding: '2% 14%',
              borderRadius: '22px',
              fontSize:"100%"
            }}
            type="submit"
          > Verify
          </Button>
        </div>
      </Form> 
    </div>
  }
  else
  {
    return <div
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
        <div  style={{paddingTop:"4%",marginLeft:"2%"}}>
        <span  style = {{fontSize:"100%",backgroundColor:"rgba(121, 180, 183, 0.42)",padding:"1% 3%",paddingLeft:"0%",height:"6%",borderRadius:"50px"}}>
      <span  style = {{color:"white",backgroundColor:"#79B4B7",padding:"1% 5%",borderRadius:"50px"}} onClick={change}>
       {name1} </span> {name2}</span>
        </div>
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
          style={{ marginTop: '3%', marginLeft: '2%' }}
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
            marginTop: '7%',
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
  }
}

export default ToggleSwitch