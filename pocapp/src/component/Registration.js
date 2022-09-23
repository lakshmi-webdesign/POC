import { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const Registration = () => {

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
    //const handleShow = () => setShow(true);

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


    return (
        <div className='row container' style={{ margin: '50px auto', backgroundColor: "rgb(26, 37, 83)", color: "white", paddingTop: '20px', paddingBottom: "20px" }}>

            <Form className='container col-md-6' onSubmit={handleSubmit}>
                <div style={{ textAlign: 'initial' }}>
                    <Form.Label >
                        <h2>Sign Up</h2>
                        {/* <h6 style={{ textAlign: 'initial', marginTop: '40px' }}></h6> */}
                    </Form.Label>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label className="d-flex">Name</Form.Label>
                        <Form.Control
                            className="d-flex"
                            autoComplete='off'
                            type="text"
                            placeholder="Enter name"
                            ref={firstNameref} required />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label className="d-flex">Email address</Form.Label>
                        <Form.Control
                            className="d-flex"
                            autoComplete='off'
                            type="email"
                            placeholder="Enter email"
                            ref={emailref} required />
                        <Form.Text className="text-muted d-flex" style={{ textAlign: 'initial' }}>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label className="d-flex">Mobile number</Form.Label>
                        <Form.Control
                            className="d-flex"
                            autoComplete='off'
                            type="number"
                            ref={mobilenumberref}
                            placeholder="Enter mobile number" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="d-flex">Password</Form.Label>
                        <Form.Control
                            className="d-flex"
                            autoComplete='off'
                            type="password"
                            ref={passwordref}
                            placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="d-flex">Confirm Password</Form.Label>
                        <Form.Control
                            className="d-flex"
                            autoComplete="off"
                            type="password"
                            ref={confirmpasswordref}
                            placeholder="Re-enter Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            ref={termsandconditionsref}
                            label="I accept the terms and conditions" required />
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
                <Modal.Header closeButton style={{borderBottom:"none"}}>
                    <Modal.Title>Registration Successfull</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{textAlign:"center"}}>You are successfully Registered !.Please Login</Modal.Body>
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

        /* <form onSubmit={handleSubmit}>
            <input
                id="first_name"
                name="first_name"
                type="text"
                ref={firstNameref}
                required
                autoComplete='off'
            //onChange={event => setFirstName(event.target.value)}
            //value={firstName}
            />
            <input
                id="last_name"
                name="last_name"
                type="email"
                ref={emailref}
                required
                autoComplete='off'
            //value={lastName}
            //onChange={event => setLastName(event.target.value)}
            />
    
            <button type="submit" onSubmit={handleSubmit}>Submit form</button>
        </form> 
    </div >
    
    */
    );
};

export default Registration;