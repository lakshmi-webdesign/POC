import { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Newcustomer(props) {


  const firstNameref = useRef(null);
  const emailref = useRef(null);
  const mobilenumberref = useRef(null);
  const passwordref = useRef(null);
  const confirmpasswordref = useRef(null);
  const termsandconditionsref = useRef(null);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate('/login');

  }

  const handleSubmit = event => {

    const firstName = firstNameref.current.value;
    const email = emailref.current.value;
    const mobile = mobilenumberref.current.value;
    const password = passwordref.current.value;
    const confirmpassword = confirmpasswordref.current.value;
    const termsandconditions = termsandconditionsref.current.value;

    const data = { firstName, email, mobile, password, confirmpassword, termsandconditions }

    event.preventDefault(); //  prevent page refresh

    firstNameref.current.value = "";
    emailref.current.value = "";
    mobilenumberref.current.value = "";
    passwordref.current.value = "";
    confirmpasswordref.current.value = "";
    termsandconditionsref.current.value = "";

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
        fetch("http://localhost:4000/user")
          .then(res => res.json())
          .then(d => {
            return d.some(element => (element.email === data.email))
          }).then(result => resolve(result));

      });
      let result = await promise;
      alert(result);
      if (!result) {
        fetch("http://localhost:4000/user", senddata)
          .then(res => res.json())
          .then(datas => console.log(datas));
        setOpen(true);
      }
      else {
        alert("couldntadd");
      }
    }
    msg();
  };


  useEffect(() => {
    props.setshow(false);
  });
  return (

      <div className='row container' style={{ margin: '50px auto', backgroundColor: "rgb(26, 37, 83)", color: "white", paddingTop: '20px', paddingBottom: "20px" }}>

        <Form className='container col-md-6' onSubmit={handleSubmit}>
        <Form.Label >
              <h2>New Customer</h2>
              {/* <h6 style={{ textAlign: 'initial', marginTop: '40px' }}></h6> */}
            </Form.Label>
          <div style={{ textAlign: 'initial' }}>

            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="d-flex">Name</Form.Label>
              <Form.Control
                className="d-flex"
                autoComplete='off'
                type="text"
                placeholder="Enter name"
                ref={firstNameref} required />

            </Form.Group>
            <div className='row'>
            <Form.Group className="col mb-3 " >
              <Form.Label className="d-flex">Gender</Form.Label>
              <Form.Select class="form-control" id="exampleFormControlSelect1">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className=" col mb-3 " >
              <Form.Label className="d-flex">Date of Birth</Form.Label>
              <Form.Control
                className="d-flex"
                autoComplete='off'
                type="date"
                required />
            </Form.Group>
            </div>
           

            <Form.Group className="mb-3 " >
              <Form.Label className="d-flex">Address</Form.Label>
              <textarea
                class="form-control d-flex"
                id="exampleFormControlTextarea1"
                autoComplete='off'
                type="address"
                placeholder="Enter Address"
                rows="3"></textarea>
            </Form.Group>

            <div className='row'>
            <Form.Group className="col mb-3 " >
              <Form.Label className="d-flex">City</Form.Label>
              <Form.Control
                className="d-flex"
                autoComplete='off'
                type="text"
                placeholder="Enter City"
                required />
            </Form.Group>

            <Form.Group className="col mb-3 " >
              <Form.Label className="d-flex">State</Form.Label>
              <Form.Control
                className="d-flex"
                autoComplete='off'
                type="text"
                placeholder="Enter State"
                required />
            </Form.Group>

            <Form.Group className="col mb-3 " >
              <Form.Label className="d-flex">PIN</Form.Label>
              <Form.Control
                className="d-flex"
                autoComplete='off'
                type="text"
                placeholder="Enter PIN"
                required />
            </Form.Group>

            </div>
            
            <Form.Group className="mb-3 ">
              <Form.Label className="d-flex">Mobile number</Form.Label>
              <Form.Control
                className="d-flex"
                autoComplete='off'
                type="number"
                ref={mobilenumberref}
                placeholder="Enter mobile number" required />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label className="d-flex">Email address</Form.Label>
              <Form.Control
                className="d-flex"
                autoComplete='off'
                type="email"
                placeholder="Enter email"
                ref={emailref} required />
            </Form.Group>

          </div>


          <Button variant="primary" type="submit" style={{ width: "inherit" }}>
            Submit
          </Button>
          <br />
          <br />
          <a href="/login" className='d-block' style={{ color: "white" }}>Already Signed in?</a>

        </Form>
        <Modal show={open} onHide={handleClose}>
          <Modal.Header closeButton style={{ borderBottom: "none" }}>
            <Modal.Title>Registration Successfull</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ textAlign: "center" }}>You are successfully Registered !.Please Login</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Go to Login
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  
  )
}

export default Newcustomer
