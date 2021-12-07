import React from 'react';
import { Card } from 'react-bootstrap';

const Person = ({info}) => (
    <Card style={{ width: '18rem', marginLeft: '30px', marginTop: '30px' }}>
        <Card.Img variant="top" src={info.avatar}/>
        <Card.Body>
            <Card.Title>{info.username}</Card.Title>
            <Card.Title>{info.last_name}</Card.Title>
            <Card.Text>{info.email}</Card.Text>
        </Card.Body>
    </Card>
);

export default Person;
