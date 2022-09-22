import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Forgotpassword() {
    const handleSubmit = event => {}
  return (
    <div className='row container' style={{ margin: '50px auto', backgroundColor: "rgb(26, 37, 83)", color: "white", paddingTop: '20px', paddingBottom: "20px" }}>

    <Form className='container col-md-6 ' onSubmit={handleSubmit}>
      <div style={{ textAlign: 'initial' }}>
        <Form.Label >
          <h2>Change Password</h2>
          {/* <h6 style={{ marginTop: '40px' }}>Sign in to access your Account Details, Transact and much more.</h6> */}
        </Form.Label>

        <Form.Group className="mb-3 " controlId="formBasicEmail">

          <Form.Label className="d-flex">Old Password</Form.Label>
          <Form.Control
            autoComplete='off'
            className="d-flex"
            name="old password"
            type="password"
            placeholder="Enter Old password" required />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">

          <Form.Label className="d-flex">New Password</Form.Label>
          <Form.Control
            autoComplete='off'
            className="d-flex"
            name="new password"
            type="password"
            placeholder="Enter New password" required />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">

          <Form.Label className="d-flex">Confirm Password</Form.Label>
          <Form.Control
            autoComplete='off'
            className="d-flex"
            name="confirm password"
            type="password"
            placeholder="Re-enter new password" required />
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
      <br />
      <br />
      
      <Link to="/registration1" style={{ color: "white" }}>
        Don't have an account ? Sign up here
      </Link>
      <br /><br />
      <Link to="/login" style={{ color: "white" }}>
      <FaIcons.FaKey/>
        &nbsp;&nbsp;Login with SSO
      </Link>


    </Form>
  </div>
  )
}

export default Forgotpassword