import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Customizedstatement() {
  const handleSubmit=()=>{

  }
  return (
    <div className='mt-2'>
      <h1>Customized Statement</h1>
      <div className='row container' style={{ margin: '50px auto', backgroundColor: "rgb(26, 37, 83)", color: "white", paddingTop: '20px', paddingBottom: "20px" }}>
        <Form className='container col-md-6 ' onSubmit={handleSubmit} >
          <div style={{ textAlign: 'initial' }}>

            <Form.Group className="mb-3 " controlId="formBasic">

              <Form.Label >Account no:</Form.Label>
              <Form.Control type="text" placeholder="Enter your account number" />    

              <div className='row d-flex'>
              <Form.Group controlId="duedate" className='col-md-6'>
              <Form.Label > From Date:</Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
              />
            </Form.Group>

            <Form.Group controlId="duedate" className='col-md-6'>
              <Form.Label >To Date:</Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
              />
            </Form.Group>
              </div>
             
              
              <Form.Label >Amount Lower Limit</Form.Label>
              <Form.Control type="number" placeholder="Enter Amount" /> 

              <Form.Label >Number of Transaction</Form.Label>
              <Form.Control type="number" placeholder="Enter Number of Transaction" /> 

              

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

export default Customizedstatement