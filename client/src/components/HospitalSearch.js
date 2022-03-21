import {React,useEffect,useState} from 'react'
import logo from './images/logo.png'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';


function HospitalSearch() {
  const [hospitals,setHospitals] = useState([])
  const hospitalServer = "http://localhost:5000/api/v1/hospital/";
    useEffect(async()=>{
      const response = await axios.get("http://localhost:5000/api/v1/hospital/"); 
      console.log(response);
    },[])
  return (
    <div>
      <Row style={{ backgroundColor: '#F8F0DF' }} className="pt-2 ps-5">
        <Row>
          <img src={logo} style={{ width: 180, height: 50 }} />
        </Row>
        <Row className="mb-4">
          <Col className="sm-1">
            <h5 className="mt-3 text-black-50">Hospital Name</h5>
            <input
              type="text"
              name="name"
              style={{ width: '100%', height: '40%', borderStyle: 'none' }}
            />
          </Col>
          <Col>
            <h5 className="mt-3 w-100 text-black-50">Hospital City</h5>
            <input
              type="text"
              name="name"
              style={{ width: '100%', height: '40%', borderStyle: 'none' }}
            />
          </Col>
          <Col>
            <Button
              className="mt-5"
              style={{
                width: '10rem',
                backgroundColor: '#79B4B7',
                borderColor: '#689B9D',
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Row>

      <Container className="mt-2 " style={{ backgroundColor: '#F6F4F4' }}>
        <Row>
          <Col>
            <strong>
              {' '}
              <span className="me-2" style={{ color: '#79B4B7' }}>
                Hospital Name
              </span>
            </strong>
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#9D9D9D',
              }}
            >
              Varanasi
            </span>
          </Col>
          <Col className="text-end">
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#9D9D9D',
              }}
            >
              Last updated on 22 Mar 2022
            </span>
          </Col>
        </Row>
        <Row>
          <span
            className="mt-4"
            style={{ fontSize: '1rem', fontWeight: '500', color: '#9D9D9D' }}
          >
            {' '}
            Available
          </span>
        </Row>
        <Container>
          <Row>
            <Col className="mt-2 mb-2">
              <span
                className="pt-1 pb-1 ps-2 pe-2 me-2"
                style={{
                  backgroundColor: '#F8F0DF',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#79B4B7',
                }}
              >
                Beds - 22
              </span>
              <span
                className="pt-1 pb-1 ps-2 pe-2 me-2"
                style={{
                  backgroundColor: '#F8F0DF',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#79B4B7',
                }}
              >
                Doctor - 12
              </span>
              <span
                className="pt-1 pb-1 ps-2 pe-2 me-2"
                style={{
                  backgroundColor: '#F8F0DF',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#79B4B7',
                }}
              >
                Blood Bag -33
              </span>
             
              <span
                className="pt-1 pb-1 ps-2 pe-2 me-2"
                style={{
                  backgroundColor: '#F8F0DF',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#79B4B7',
                }}
              >
                Ventilators - 12
              </span>
            </Col>
            
            <Col className="text-end ms-0">
            <Link to ='/hospitaldetail' style={{textDecoration:"none"}}>
              <span
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#79B4B7',
                }}
              >
                View Detail
              </span>
              </Link>
            </Col>
          </Row>
        </Container>

      </Container>
      
    </div>
  )
}

export default HospitalSearch
