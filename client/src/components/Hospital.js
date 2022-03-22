import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Hospital(props) {
  return (
    <Container className="mt-2 " style={{ backgroundColor: '#F6F4F4' }}>
        <Row>
          <Col>
            <strong>
              {' '}
              <span className="me-1" style={{ color: '#79B4B7', fontSize:"150%" }}>
                {props.name}
              </span>
            </strong>
            <span
              style={{
                fontSize: '0.8rem',
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
              Last updated on {props.date.substring(0,10)}
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
  )
}

export default Hospital