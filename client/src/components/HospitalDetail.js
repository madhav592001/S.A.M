import React from 'react'
import logo from './images/logo.png'
import { Row, Container, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function HospitalDetail() {
  const dataStyle = {
    color: '#7E7A7A',
    border: 'none',
    backgroundColor: '#fff',
    paddingLeft: '4%',
    borderWidth: '0px',
    boxShadow: 'none',
  }
  const headingStyle = {
    color: '#79B4B7',
    border: 'none !important',
    backgroundColor: '#fff',
    paddingLeft: '4%',
    borderWidth: '0px',
  }
  const HosDetail = [
    { SNo: '1', Item: 'Bed(General)', Available: '22', Price: '1000' },
  ]
  const renderHosDetail = (HosDetail, index) => {
    return (
      <tr style={{ backgroundColor: '1A374D', border: ' none' }} key={index}>
        <td style={dataStyle}>{HosDetail.SNo}</td>
        <td style={dataStyle}>{HosDetail.Item}</td>
        <td style={dataStyle}>{HosDetail.Available}</td>
        <td style={dataStyle}>{HosDetail.Price}</td>
        <td style={dataStyle}></td>
      </tr>
    )
  }
  return (
    <div>
      <Row style={{ backgroundColor: '#F8F0DF' }} className="pt-2 ps-5">
        <Row>
          <img src={logo} style={{ width: 180, height: 50 }} />
        </Row>
        <Row className="mb-4">
          <Col className="sm-1">
            <h5 className="mt-3 text-black-50">Hospital City</h5>
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
      <Container>
        <Row>
          <Col>
            <h3 className="mt-3 text-black-50">Hospital Name</h3>
          </Col>
          <Col className="text-end mt-3">
            <Link to ='/hospitalsearch'>
            <Button
              className="pt-1 pb-1 ps-3 pe-3"
              style={{ backgroundColor: '#F8F0DF', color: '#9D9D9D' }}
            >
              Back
            </Button>
            </Link>
          </Col>
        </Row>
        <Container>
          <Row>
            <Table
              striped
              bordered
              hover
              style={{
                border: 'none !important',
                borderWidth: '0px',
                backgroundColor: '#fff',
                borderColor: '#fff',
              }}
            >
              <thead>
                <tr>
                  <th style={headingStyle}>S.No.</th>
                  <th style={headingStyle}>Item</th>
                  <th style={headingStyle}>No. of Available</th>
                  <th style={headingStyle}>Price</th>
                </tr>
              </thead>
              <tbody>{HosDetail.map(renderHosDetail)}</tbody>
            </Table>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default HospitalDetail
