import {React,useEffect,useState} from 'react'
import logo from './images/logo.png'
import { Row, Container, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import Hospital from './Hospital';


function HospitalSearch() {
  const [hospitals,setHospitals] = useState([])
  const hospitalServer = "http://localhost:5000/api/v1/hospital/";
    useEffect(async()=>{
      const response = await axios.get("http://localhost:5000/api/v1/hospital/"); 
      setHospitals(response.data.hospitals);
    },[])
    console.log(hospitals);
    
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
      {hospitals.length === 0?<h1>NO HOSPITALS FOUND</h1>: <Hospital/>}
     
      
    </div>
  )
}

export default HospitalSearch
