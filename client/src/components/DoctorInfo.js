import React from 'react'
import logo from './images/logo.png'
import { Row, Container, Table } from 'react-bootstrap'
function DoctorInfo() {
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
  const DoctorDetail = [
    {
      Name: 'Ramesh',
      Qualification: 'MBBS, MD',
      Specialisation: 'Heart',
      Charge: '2000',
    },
  ]
  const renderDoctorDetail = (DoctorDetail, index) => {
    return (
      <tr style={{ backgroundColor: '1A374D', border: ' none' }} key={index}>
        <td style={dataStyle}>{DoctorDetail.Name}</td>
        <td style={dataStyle}>{DoctorDetail.Qualification}</td>
        <td style={dataStyle}>{DoctorDetail.Specialisation}</td>
        <td style={dataStyle}>{DoctorDetail.Charge}</td>
        <td style={dataStyle}></td>
      </tr>
    )
  }
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <img src={logo} style={{ width: 180, height: 50 }} />
        </Row>
        <Container>
          <Row>
            <h4 className="mt-4 text-black-50">Doctors</h4>
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
                    <th style={headingStyle}>Name</th>
                    <th style={headingStyle}>Qualification</th>
                    <th style={headingStyle}>Specialisation</th>
                    <th style={headingStyle}>Charge</th>
                  </tr>
                </thead>
                <tbody>{DoctorDetail.map(renderDoctorDetail)}</tbody>
              </Table>
            </Row>
          </Container>
        </Container>
      </Container>
    </div>
  )
}

export default DoctorInfo
