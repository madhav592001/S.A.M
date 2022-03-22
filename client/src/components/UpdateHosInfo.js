import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import logo from './images/logo.png'
import pic from './images/pic.jpeg'
import { Link } from 'react-router-dom'
import {
  faPlusSquare,
  faSignOut,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons'

function UpdateHosInfo() {
  //Checkboc States

  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter === 0) {
      return
    }
    setCounter(counter - 1)
  }
  const [counter1, setCounter1] = useState(0)

  // Function is called everytime increment button is clicked
  const handleClick11 = () => {
    // Counter state is incremented
    setCounter1(counter1 + 1)
  }

  // Function is called everytime decrement button is clicked
  const handleClick21 = () => {
    // Counter state is decremented
    if (counter1 === 0) {
      return
    }
    setCounter1(counter1 - 1)
  }

  const [counter2, setCounter2] = useState(0)

  // Function is called everytime increment button is clicked
  const handleClick12 = () => {
    // Counter state is incremented
    setCounter2(counter2 + 1)
  }

  // Function is called everytime decrement button is clicked
  const handleClick22 = () => {
    // Counter state is decremented
    if (counter2 === 0) {
      return
    }
    setCounter2(counter2 - 1)
  }

  const [counter3, setCounter3] = useState(0)

  // Function is called everytime increment button is clicked
  const handleClick13 = () => {
    // Counter state is incremented
    setCounter3(counter3 + 1)
  }

  // Function is called everytime decrement button is clicked
  const handleClick23 = () => {
    // Counter state is decremented
    if (counter3 === 0) {
      return
    }
    setCounter3(counter3 - 1)
  }
  const [counter4, setCounter4] = useState(0)

  // Function is called everytime increment button is clicked
  const handleClick14 = () => {
    // Counter state is incremented
    setCounter4(counter4 + 1)
  }

  // Function is called everytime decrement button is clicked
  const handleClick24 = () => {
    // Counter state is decremented
    if (counter4 === 0) {
      return
    }
    setCounter4(counter4 - 1)
  }

  const [counter5, setCounter5] = useState(0)

  // Function is called everytime increment button is clicked
  const handleClick15 = () => {
    // Counter state is incremented
    setCounter5(counter5 + 1)
  }

  // Function is called everytime decrement button is clicked
  const handleClick25 = () => {
    // Counter state is decremented
    if (counter5 === 0) {
      return
    }
    setCounter5(counter5 - 1)
  }

  const style = {
    width: '90%',
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
                <Link
                  to="/hospitaldashboard"
                  style={{ textDecoration: 'none' }}
                >
                  <span style={{ color: '#79B4B7' }}> Hospital Detail </span>
                </Link>
              </span>
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

      {/* Dashboard main  */}
      <Container>
        <Row className="position-relative ms-5 ps-5">
          <Row className="ms-5">
            <Col className="ms-5 pt-3">
              <span
                className="ms-5 "
                style={{ color: '#79B4B7', fontWeight: '600' }}
              >
                Update Hospital Detail
              </span>
              <Link to="/updatedocinfo" style={{ textDecoration: 'none' }}>
                <span
                  className="ms-5 text-black-50"
                  style={{ fontWeight: '600' }}
                >
                  Update Doctor Detail
                </span>
              </Link>
            </Col>
          </Row>
          <Row className="ms-5">
            <Col className="ms-5 pt-3">
              <h2 className="ms-3"> Update Hospital Information</h2>
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
          <Row className="ms-5 mt-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Beds(General)</p>
              <div className="text-left ms-3" style={{ width: '130px' }}>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="minus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick2}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </span>
                  <input
                    type="text"
                    name="quant[2]"
                    className="form-control input-number pt-1 pb-1"
                    value={counter}
                    min="1"
                    max="100"
                    style={{ borderColor: '#79B4B7' }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="plus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick1}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </span>
                </div>
                <p></p>
              </div>
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Beds(ICU)</p>
              <div className="text-left ms-3" style={{ width: '130px' }}>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="minus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick21}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </span>
                  <input
                    type="text"
                    name="quant[2]"
                    className="form-control input-number pt-1 pb-1"
                    value={counter1}
                    min="1"
                    max="100"
                    style={{ borderColor: '#79B4B7' }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="plus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick11}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </span>
                </div>
                <p></p>
              </div>
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Private Ward</p>
              <div className="text-left ms-3" style={{ width: '130px' }}>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="minus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick22}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </span>
                  <input
                    type="text"
                    name="quant[2]"
                    className="form-control input-number pt-1 pb-1"
                    value={counter2}
                    min="1"
                    max="100"
                    style={{ borderColor: '#79B4B7' }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="plus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick12}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </span>
                </div>
                <p></p>
              </div>
            </Col>
          </Row>
          <Row className="ms-5 mt-5">
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Ventilator Beds</p>
              <div className="text-left ms-3" style={{ width: '130px' }}>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="minus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick23}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </span>
                  <input
                    type="text"
                    name="quant[2]"
                    className="form-control input-number pt-1 pb-1"
                    value={counter3}
                    min="1"
                    max="100"
                    style={{ borderColor: '#79B4B7' }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="plus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick13}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </span>
                </div>
                <p></p>
              </div>
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Oxygen Cylinder</p>
              <div className="text-left ms-3" style={{ width: '130px' }}>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="minus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick24}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </span>
                  <input
                    type="text"
                    name="quant[2]"
                    className="form-control input-number pt-1 pb-1"
                    value={counter4}
                    min="1"
                    max="100"
                    style={{ borderColor: '#79B4B7' }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="plus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick14}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </span>
                </div>
                <p></p>
              </div>
            </Col>
            <Col className="ms-5 pt-3 text-black-50">
              <p className="ms-3">No. of Available Blood Bag</p>
              <div className="text-left ms-3" style={{ width: '130px' }}>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="minus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick25}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </span>
                  <input
                    type="text"
                    name="quant[2]"
                    className="form-control input-number pt-1 pb-1"
                    value={counter5}
                    min="1"
                    max="100"
                    style={{ borderColor: '#79B4B7' }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-number pt-1 pb-1"
                      data-type="plus"
                      data-field="quant[2]"
                      style={{
                        backgroundColor: '#79B4B7',
                        borderColor: '#79B4B7',
                        color: '#fff',
                      }}
                      onClick={handleClick15}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </span>
                </div>
                <p></p>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default UpdateHosInfo
