import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

//import {  Outlet,Link } from 'react-router-dom';
function Register() {

  const firstNameref = useRef(null);
  const Emailref = useRef(null);
  const mobilenumberref = useRef(null);
  const passwordref = useRef(null);
  const confirmpassword = useRef(null);
  const termsandconditions = useRef(null);


  const handleSubmit = event => {
    const firstName = firstNameref.current.value;
    const email = Emailref.current.value;
    const password = passwordref.current.value;
    const mobile = mobilenumberref.current.value;

    const data = {
      firstName,
      email,
      password,
      mobile
    }

    event.preventDefault();
    
    firstNameref.current.value = "";
    Emailref.current.value = "";
    passwordref.current.value = "";
    confirmpassword.current.value="";
    mobilenumberref.current.value = "";

    let senddata = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }

    async function msg() {
      // a promise
      let promise = new Promise(function (resolve, reject) {
        const url = fetch("http://localhost:4000/user")
          .then(res => res.json())
          .then(d => {
            return d.some(element => (element.email === data.email))
          }).then(result => resolve(result));

      });
      let result = await promise;
      console.log(result);
      if (!result) {
        fetch("http://localhost:4000/user", senddata)
          .then(res => res.json())
          .then(datas => console.log(datas));
        
      }
      else{
        alert("Couldnt add");
      }
    }
    msg();

  }
  return (

    <div className='row container' style={{ margin: '50px auto', backgroundColor: "rgb(26, 37, 83)", color: "white", paddingTop: '20px', paddingBottom: "20px" }}>

      <Form className='container col-md-6' onSubmit={handleSubmit}>
        <div style={{ textAlign: 'initial' }}>
          <Form.Label >
            <h2>Sign Up</h2>
            <h6 style={{ textAlign: 'initial', marginTop: '40px' }}></h6>
          </Form.Label>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="d-flex">Name</Form.Label>
            <Form.Control className="d-flex" autoComplete='off' type="text" placeholder="Enter name" ref={firstNameref} required />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="d-flex">Email address</Form.Label>
            <Form.Control className="d-flex" autoComplete='off' type="email" placeholder="Enter email" ref={Emailref} required />
            <Form.Text className="text-muted d-flex" style={{ textAlign: 'initial' }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="d-flex">Mobile number</Form.Label>
            <Form.Control className="d-flex" autoComplete='off' type="number" ref={mobilenumberref} placeholder="Enter mobile number" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="d-flex">Password</Form.Label>
            <Form.Control className="d-flex" autoComplete='off' type="password" ref={passwordref} placeholder="Password" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="d-flex">Confirm Password</Form.Label>
            <Form.Control className="d-flex" autoComplete="off" type="password" ref={confirmpassword} placeholder="Re-enter Password" required />
          </Form.Group>

          {/* <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" ref={termsandconditions} label="I accept the terms and conditions" required />
          </Form.Group> */}
        </div>

        <Button variant="primary" type="submit" style={{ width: "inherit" }}>
          Submit
        </Button>
        <br />
        <br />
        <a href="/login" className='d-block' style={{ color: "white" }}>Already Signed in?</a>
      </Form>

    </div>


  );
}


export default Register;