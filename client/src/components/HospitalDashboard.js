import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import logo from './images/logo.png'
import pic from './images/pic.jpeg'
import { Link } from 'react-router-dom'
import {
  faPlusSquare,
  faSignOut,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons'
import CheckBox from './CheckBox'
function HospitalDashboard() {
  const style = {
    width: '70%',
    height: '40%',
    background: 'transparent',
    borderTop: 0,
    borderLeft: '0',
    borderRight: '0',
    borderBottom: '2px solid',
    boxShadow: 'none',
    WebkitBoxShadow: 'none',
    borderRadius: '0',
    borderColor: '#9D9D9D',
  }
  return (
    <div>
      {/* dashboard sidebar */}

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
                <span style={{ color: '#79B4B7' }}> Hospital Detail</span>
              </span>
            </Col>
            <Col className="pb-5 pt-5 ">
              <span
                className="text-black-50"
                style={{ fontWeight: '600', fontSize: '1.1rem' }}
              >
                <FontAwesomeIcon className="pe-2" icon={faRefresh} />
                <Link
                  to="/updatehosinfo"
                  className="text-black-50"
                  style={{ textDecoration: 'none' }}
                >
                  Update Detail
                </Link>
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

      {/* Dashboard main  */}
      <Container>
        <Row className="position-relative ms-5 ps-5">
          <Row className="ms-5">
            <Col className="ms-5 pt-3">
              <span
                className="ms-5 "
                style={{ color: '#79B4B7', fontWeight: '600' }}
              >
                Hospital Detail
              </span>
              <Link to="/doctordetail" style={{ textDecoration: 'none' }}>
                <span
                  className="ms-5 text-black-50"
                  style={{ fontWeight: '600' }}
                >
                  Doctor Detail
                </span>
              </Link>
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3">
              <h2 className="ms-3">Hospital Information</h2>
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
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">Located at(City)</p>
              <input
                className=" ms-3"
                type="text"
                name="name"
                style={{
                  width: '50%',
                  height: '40%',
                  background: 'transparent',
                  borderTop: 0,
                  borderLeft: '0',
                  borderRight: '0',
                  borderBottom: '2px solid',
                  boxShadow: 'none',
                  WebkitBoxShadow: 'none',
                  borderRadius: '0',
                  borderColor: '#9D9D9D',
                }}
              />
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Doctors</p>
              <CheckBox />
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Beds(General)</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Beds(General)</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">Price of Bed(General)</p>
              <input className=" ms-3" type="text" name="name" style={style} />
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Beds(ICU)</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Beds(ICU)</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">Price of Bed(ICU)</p>
              <input className=" ms-3" type="text" name="name" style={style} />
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Private Ward</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Private Ward</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">Price of Private Ward</p>
              <input className=" ms-3" type="text" name="name" style={style} />
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Ventilator Beds</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Ventilator Beds</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">Price of Ventilator Beds</p>
              <input className=" ms-3" type="text" name="name" style={style} />
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Oxygen Cylinder</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Oxygen Cylinder</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">Price of Oxygen Cylinder</p>
              <input className=" ms-3" type="text" name="name" style={style} />
            </Col>
          </Row>
          <Row className="ms-5 mb-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Blood Bag</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Blood Bag</p>
              <CheckBox />
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">Price of Blood Bag</p>
              <input className=" ms-3" type="text" name="name" style={style} />
            </Col>
          </Row>
        </Row>
      </Container>
      {/* </Container> */}
    </div>
  )
}

export default HospitalDashboard
