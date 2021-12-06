import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Person = ({info}) => (
        <Card style={{ width: '18rem', marginBottom: '30px', marginLeft: '30px', marginTop: '10px' }}>
            <Card.Img variant="top" src={info.avatar} />
            <Card.Body>
                <Card.Title>{info.first_name}</Card.Title>
                <Card.Title>{info.last_name}</Card.Title>
                <Card.Text>{info.email}</Card.Text>
                <Button variant="primary">test</Button>
            </Card.Body>
        </Card>
);

export default Person;
