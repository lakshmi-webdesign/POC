import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function FundTransfer() {
    const handleSubmit=()=>{

    }
  return (
    <div className='mt-2'>
        <h1>Fund Transfer</h1>
        <div className='row container' style={{ margin: '50px auto', backgroundColor: "rgb(26, 37, 83)", color: "white", paddingTop: '20px', paddingBottom: "20px" }}>
        <Form className='container col-md-6 ' onSubmit={handleSubmit} >
          <div style={{ textAlign: 'initial' }}>

            <Form.Group className="mb-3 " controlId="formBasic">

              <Form.Label >Payers's Account no:</Form.Label>
              <Form.Control type="text" placeholder="Enter your account number" />    

              <Form.Label >Payee's Account no:</Form.Label>
              <Form.Control type="text" placeholder="Enter Payee's account number" /> 

              <Form.Label >Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter Amount" /> 

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
        </div>
    </div>
  )
}

export default FundTransfer