import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import logo from './images/logo.png'
import pic from './images/pic.jpeg'
import { Link } from 'react-router-dom'
import {
  faPlusSquare,
  faSignOut,
  faRefresh,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

function UpdateDocInfo() {
  const UpdateDoctorDetail = [
    {
      Name: 'Ramesh',
      Email: 'rameshkumar23@gmail.com',
      Qualification: 'MBBS, MD',
      Specialisation: 'Heart',
      Charge: '1000',
    },
    {
      Name: 'Ramesh',
      Email: 'rameshkumar23@gmail.com',
      Qualification: 'MBBS, MD',
      Specialisation: 'Heart',
      Charge: '1000',
    },
  ]
  const headingStyle = {
    color: '#79B4B7',
    border: 'none !important',
    backgroundColor: '#fff',
    paddingLeft: '4%',
    borderWidth: '0px',
  }
  const dataStyle = {
    color: '#7E7A7A',
    border: 'none',
    backgroundColor: '#fff',
    paddingLeft: '4%',
    borderWidth: '0px',
    boxShadow: 'none',
  }
  const renderUpdateDoctorDetail = (UpdateDoctorDetail, index) => {
    return (
      <tr style={{ backgroundColor: '1A374D', border: ' none' }} key={index}>
        <td style={dataStyle}>{UpdateDoctorDetail.Name}</td>
        <td style={dataStyle}>{UpdateDoctorDetail.Email}</td>
        <td style={dataStyle}>{UpdateDoctorDetail.Qualification}</td>
        <td style={dataStyle}>{UpdateDoctorDetail.Specialisation}</td>
        <td style={dataStyle}>{UpdateDoctorDetail.Charge}</td>
        <td style={dataStyle}>
          <FontAwesomeIcon icon={faEdit} style={{ color: '#79B4B7' }} />
        </td>
        <td style={dataStyle}>
          <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
        </td>
      </tr>
    )
  }
  return (
    <div>
      <Row style={{ position: ' absolute', top: 0, bottom: 0 }}>
        <Row>
          <Col
            className=" text-center col-lg-3 col-sm-4 col-5"
            style={{ backgroundColor: '#F8F0DF' }}
          >
            <img
              className="mt-3 justifyItems-center"
              src={logo}
              style={{ width: '60%', height: '45%' }}
              alt="logo "
            />
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center col-lg-3 col-sm-4 col-5"
            style={{ backgroundColor: '#F8F0DF' }}
          >
            <img
              className="justifyItems-center"
              src={pic}
              style={{ width: '40%', height: '60%', borderRadius: '500px' }}
              alt="logo "
            />
            <h5 className="text-black-50 pt-3" style={{ fontWeight: '700' }}>
              {' '}
              Hospital Name
            </h5>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center col-lg-3 col-sm-4 col-5"
            style={{ backgroundColor: '#F8F0DF' }}
          ></Col>
        </Row>
        <Row>
          <Col
            className=" text-center col-lg-3 col-sm-4 col-5"
            style={{ backgroundColor: '#F8F0DF' }}
          >
            <Col>
              <Link to="/hospitaldashboard" style={{ textDecoration: 'none' }}>
                <span
                  className="text-black-50 "
                  style={{
                    color: '#79B4B7',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                  }}
                >
                  <FontAwesomeIcon
                    style={{ color: '#79B4B7' }}
                    className="pe-2"
                    icon={faPlusSquare}
                  />

                  <span style={{ color: '#79B4B7' }}> Hospital Detail </span>
                </span>
              </Link>
            </Col>
            <Col className="pb-5 pt-5 ">
              <span
                className="text-black-50"
                style={{ fontWeight: '600', fontSize: '1.1rem' }}
              >
                <FontAwesomeIcon className="pe-2" icon={faRefresh} />
                Update Detail
              </span>
            </Col>
            <Col className=" " style={{ paddingBottom: '6rem' }}>
              <span
                className="text-black-50 pe-5"
                style={{ fontWeight: '600', fontSize: '1.1rem' }}
              >
                <FontAwesomeIcon className="pe-2" icon={faSignOut} />
                Log Out
              </span>
            </Col>
          </Col>
        </Row>
      </Row>
      <Container>
        {/* dashboard main part */}
        <Row className="position-relative ms-5 ps-5">
          <Row className="ms-5">
            <Col className="ms-5 pt-3">
              <Link to="/updatehosinfo" style={{ textDecoration: 'none' }}>
                <span
                  className="ms-5 text-black-50"
                  style={{ fontWeight: '600' }}
                >
                  Update Hospital Detail
                </span>
              </Link>
              <span
                className="ms-5 "
                style={{ color: '#79B4B7', fontWeight: '600' }}
              >
                Update Doctor Detail
              </span>
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3">
              <h2 className="ms-3"> Update Doctor Information</h2>
            </Col>
            <Col className=" pt-3 text-end">
              <Button
                className="pt-1 pb-1 ps-2 pe-2 me-3"
                style={{ backgroundColor: '#9D9D9D', color: '#fff' }}
              >
                Cancel
              </Button>
              <Button
                className="pt-1 pb-1 ps-3 pe-3"
                style={{ backgroundColor: '#79B4B7', color: '#fff' }}
              >
                Save
              </Button>
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3">
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
                    <th style={headingStyle}>Name</th>
                    <th style={headingStyle}>Email</th>
                    <th style={headingStyle}>Qualification</th>
                    <th style={headingStyle}>Specialisation</th>
                    <th style={headingStyle}>Charge</th>
                  </tr>
                </thead>
                <tbody>
                  {UpdateDoctorDetail.map(renderUpdateDoctorDetail)}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default UpdateDocInfo
