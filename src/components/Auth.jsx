import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleOnLog = async (event, email, password) => {
        event.preventDefault();
        try {
            const response = await axios.post(`https://reqres.in/api/login`,
                { 'email': `${email}`, 'password': `${password}` }
            );
            setToken(response.data.token);
        } catch(error) {
            setToken('Incorrect email, please type email one of employee, like george.bluth@reqres.in');
        }
        setShow(true);
    };

    return (
        <>
            <Form className="w-25">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="george.bluth@reqres.in" onChange={handleOnChangeEmail}
                                  value={email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="123" onChange={handleOnChangePassword} value={password}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(event) => handleOnLog(event, email, password)}>
                    Submit
                </Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{token}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Auth;
