import { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Withdrawal(props) {
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
          <h2>Withdrawal</h2>
          {/* <h6 style={{ textAlign: 'initial', marginTop: '40px' }}></h6> */}
        </Form.Label>
        <div style={{ textAlign: 'initial' }}>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="d-flex">Account Number</Form.Label>
            <Form.Control
              className="d-flex"
              autoComplete='off'
              type="text"
              placeholder="Enter Account Number"
              ref={firstNameref} required />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="d-flex">Amount</Form.Label>
            <Form.Control
              className="d-flex"
              autoComplete='off'
              type="text"
              placeholder="Enter Amount"
              ref={firstNameref} required />

          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="d-flex">Description</Form.Label>
            <Form.Control
              className="d-flex"
              autoComplete='off'
              type="text"
              placeholder="Enter Description"
              ref={firstNameref} required />
          </Form.Group>

        </div>


        <div className="d-flex">
          <div className='col-6'>
            <Button variant="primary" type="submit" style={{ width: "100px" }} onSubmit={handleSubmit}>
              Submit
            </Button>
          </div>
          <div className='col-6'>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100px" }} >
              Reset
            </Button>
          </div>

        </div>

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

export default Withdrawal