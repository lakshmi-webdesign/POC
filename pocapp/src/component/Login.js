
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Login() {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const handleSubmit = event => {

    const email = emailref.current.value;
    const password = passwordref.current.value;

    const data = { email, password };

    event.preventDefault();
    emailref.current.value = "";
    passwordref.current.value = "";

    // let senddata = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(data)
    // }
    async function msg() {
      // a promise
      let promise = new Promise(function (resolve, reject) {
        const url = fetch("http://localhost:4000/user")
          .then(res => res.json())
          .then(d =>d.find(element => ((element.email === data.email) && (element.password === data.password))))
          .then(result => resolve(JSON.stringify(result)));
      });
      
      // let result = await promise;
      // alert(result);
      // if (!result) {
      //   fetch("http://localhost:4000/user", senddata)
      //     .then(res => res.json())
      //     .then(datas => console.log(datas))
      //     .catch(error => alert(error));

      // }
      // else {
      //   alert("couldntadd");
      // }

       let result = await promise;
       console.log(JSON.parse(result));
      // if(result){
      //   sessionStorage.setItem("login_data",JSON.stringify(data));
      // }
      // else{
      //   console.log("couldnt login")
      // }
    }
    msg();
  }
  return (
    <div className='row container' style={{ margin: '50px auto', backgroundColor: "rgb(26, 37, 83)", color: "white", paddingTop: '20px', paddingBottom: "20px" }}>

      <Form className='container col-md-6 ' onSubmit={handleSubmit}>
        <div style={{ textAlign: 'initial' }}>
          <Form.Label >
            <h2>Sign In </h2>
            <h6 style={{ marginTop: '40px' }}>Sign in to access your Account Details, Transact and much more.</h6>
          </Form.Label>

          <Form.Group className="mb-3 " controlId="formBasicEmail">

            <Form.Label className="d-flex">Email address</Form.Label>
            <Form.Control
              autoComplete='off'
              className="d-flex"
              name="email"
              type="email"
              ref={emailref}
              placeholder="Enter email" required />
            <Form.Text className="text-muted d-flex" style={{ textAlign: 'initial' }}>
              We'll never share your email with anyone else.
            </Form.Text>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="d-flex">Password</Form.Label>
            <Form.Control
              autoComplete='off'
              className="d-flex"
              name="password"
              type="password"
              ref={passwordref}
              placeholder="Password" required />
          </Form.Group>


          <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out" required />
          </Form.Group>


        </div>



        <Button variant="primary" type="submit" style={{ width: "inherit" }}>
          Submit
        </Button>
        <br />
        <br />
        <Link to="/forgotpassword" className='d-block' style={{ color: "white" }}>
          Forgot Password?
        </Link>
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
  );
}


export default Login;