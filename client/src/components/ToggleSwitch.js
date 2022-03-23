import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import './ToggleSwitch.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ToggleSwitch() {
  const [val, setVal] = useState(0);
  const [close, setClose] = useState(true);
  const [loginPass, setLoginPass] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [otp, setotp] = useState();
  const [message, setMessage] = useState('');
  let navigate = useNavigate();

  //login api
  const signin = async (e) => {
    e.preventDefault();
    const config = {
      email: loginEmail,
      password: loginPass,
    };
    console.log(config);
    const res = await axios.post(
      'http://localhost:5000/api/v1/hospital/signin',
      config
    );
    if (res.status === 210) setError('Invalid Credentials');
    else if (res.status === 500) setError('Internal Error');
    else if (res.status === 200) {
      setMessage('Login Successful');
      setSuccess(true);
      setTimeout(() => {
        navigate('/hospitaldashboard');
      }, 3000);
    }
  };

  //* form state

  const getOtp = async (e) => {
    setLoading((kfj) => setLoading(true));
    e.preventDefault();
    const config = {
      email: email,
      name: userName,
      password: password,
    };
    // console.log(config)
    const res = await axios.post(
      'http://localhost:5000/api/v1/hospital/signup',
      config
    );

    // console.log(res.data)

    if (res.status === 200) {
      await localStorage.setItem('userId', res.data.data.userId);
      // console.log(res.data.data)
      setSuccess(true);
      setMessage((re) => setMessage('OTP sent successfully on Email'));
      // console.log(userId) ;
      setClose(false);
    }

    if (res.status === 210)
      setError((error) => setError('Email Already Exist, Please try to login'));
    if (res.status === 211)
      setError((error) => setError('Invalid Credentials'));

    setLoading((fkja) => setLoading(false));
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading((kfj) => setLoading(true));
    const config = {
      userId: localStorage.getItem('userId'),
      otp: otp,
    };
    console.log(config);
    const res = await axios.post(
      'http://localhost:5000/api/v1/hospital/verifyotp',
      config
    );

    console.log(res);

    if (res.status === 200) {
      setSuccess(true);
      setMessage((re) => setMessage('OTP verified'));

      setTimeout(() => {
        window.location.reload(false);
      }, 5000);
    }
    if (res.status === 210)
      setError((error) => setError('Code Expired Or Invalid Credentials'));
  };

  const name1 = 'Login';
  const name2 = 'SignUp';
  const change = () => {
    if (val === 0) setVal(1);
    else setVal(0);
  };
  if (val === 1) {
    return (
      <div
        style={{
          backgroundColor: '#FFFFFF',
          width: '80%',
          height: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '2%',
          paddingBottom: '4%',
        }}
      >
        {loading ? <Spinner animation='grow' variant='info' /> : ''}

        {success && (
          <Alert
            variant='success'
            onClose={() => setSuccess(false)}
            dismissible
          >
            OTP sent successfully on your email
          </Alert>
        )}
        {error && (
          <Alert variant='danger' onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}

        <div style={{ paddingTop: '4%', marginLeft: '2%' }}>
          <span className='parentclicked' onClick={change}>
            {' '}
            {name1}
            <span className='oneclicked'>{name2} </span>{' '}
          </span>
        </div>
        <Form>
          <Form.Group className='mb-3'>
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
              type='text'
              placeholder='Enter Name'
              value={userName}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              style={{
                marginLeft: '2%',
                width: '80%',
                borderTop: '1px',
                borderRight: '1px',
                borderLeft: '1px',
              }}
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text
              style={{ marginLeft: '2%', fontSize: '70%' }}
              className='text-muted'
            >
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              style={{
                marginLeft: '2%',
                width: '80%',
                borderTop: '1px',
                borderRight: '1px',
                borderLeft: '1px',
              }}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              style={{
                marginTop: '1%',
                backgroundColor: '#79B4B7',
                padding: '1.5% 10%',
                borderRadius: '22px',
                fontSize: '90%',
              }}
              onClick={getOtp}
            >
              {' '}
              Get OTP
            </Button>
          </div>
          <Form.Group className='mb-3'>
            <Form.Control
              style={{
                marginLeft: '2%',
                width: '80%',
                borderTop: '1px',
                borderRight: '1px',
                borderLeft: '1px',
              }}
              disabled={close}
              type='text'
              placeholder='Enter OTP'
              value={otp}
              onChange={(e) => setotp(e.target.value)}
            />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              style={{
                marginTop: '1%',
                backgroundColor: '#79B4B7',
                padding: '2% 14%',
                borderRadius: '22px',
                fontSize: '100%',
              }}
              disabled={close}
              onClick={verifyOtp}
            >
              Verify
            </Button>
          </div>
        </Form>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: '#FFFFFF',
          width: '80%',
          height: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '2%',
          paddingBottom: '4%',
        }}
      >
        {loading ? <Spinner animation='grow' variant='info' /> : ''}

        {success && (
          <Alert variant='success' onClose={() => setMessage('')} dismissible>
            {message}
          </Alert>
        )}
        {error && (
          <Alert variant='danger' onClose={() => setError('')} dismissible>
            {error}
          </Alert>
        )}
        <div style={{ paddingTop: '4%', marginLeft: '2%' }}>
          <span
            style={{
              fontSize: '100%',
              backgroundColor: 'rgba(121, 180, 183, 0.42)',
              padding: '1% 3%',
              paddingLeft: '0%',
              height: '6%',
              borderRadius: '50px',
            }}
            onClick={change}
          >
            <span
              style={{
                color: 'white',
                backgroundColor: '#79B4B7',
                padding: '1% 5%',
                borderRadius: '50px',
              }}
            >
              {name1}{' '}
            </span>{' '}
            {name2}
          </span>
        </div>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
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
              type='email'
              placeholder='Enter email'
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
            <Form.Text
              style={{ marginLeft: '2%', fontSize: '70%' }}
              className='text-muted'
            >
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
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
              type='password'
              placeholder='Password'
              onChange={(e) => {
                setLoginPass(e.target.value);
              }}
            />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              style={{
                marginTop: '7%',
                backgroundColor: '#79B4B7',
                padding: '2% 15%',
                borderRadius: '22px',
                fontSize: '100%',
              }}
              onClick={signin}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default ToggleSwitch;
