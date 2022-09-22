import React, { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const options = [
 
  {
    label: "ACXXXXXXXX0146",
    value: "1",
  },
  {
    label: "ACXXXXXXXX0032",
    value: "2",
  }
];

function BalanceEnquiry() {
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [accno1, setAccno1] = useState("1");
  const [accno2,setAccno2]= useState("1");

  const formRef = useRef(null);
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(accno1);
    if ((accno1 === '1')) {
      setopen1(true);
      setopen2(false)
    }
    if ((accno2 === '2')) {
      setopen2(true);
      setopen1(false)
    }
  }
  return (
    <div className='mt-2'>
      <h1>Balance Enquiry</h1>
      <div className='row container' style={{ margin: '50px auto', backgroundColor: "rgb(26, 37, 83)", color: "white", paddingTop: '20px', paddingBottom: "20px" }}>

        <Form className='container col-md-6 ' onSubmit={handleSubmit} >
          <div style={{ textAlign: 'initial' }}>

            <Form.Group className="mb-3 " controlId="formBasicEmail">

              <Form.Label >Account no:</Form.Label>
              <Form.Select onChange={(e) => {setAccno1(e.target.value);setAccno2(e.target.value)}}>
                <option selected value="0">--Set Account Number--</option>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </Form.Select>
             

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
              style={{ width: "100px" }} 
              onClick={(e) => {
                setopen1(false);
                setopen2(false);
                setAccno1(null);
                setAccno2(null);
                formRef.current.reset()}}>
                Reset
              </Button>
            </div>

          </div>


        </Form>
        {open1 && <Table bordered style={{ color: "white" , marginTop:"20px"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Account number</th>
              <th>Balance</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ACXXXXXXXX0146</td>
              <td>3,50,000.00</td>
             
            </tr>
            
            
          </tbody>
        </Table>}

        {open2 && <Table bordered style={{ color: "white" , marginTop:"20px"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Account number</th>
              <th>Balance</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ACXXXXXXXX0032</td>
              <td>1,00,000.00</td>
             
            </tr>
            
            
          </tbody>
        </Table>}

      </div>
    </div>

  )
}

export default BalanceEnquiry