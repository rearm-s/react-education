import React from 'react';
import { Card } from 'react-bootstrap';

import { StyledPerson } from '../styled/Person';

const Person = ({info}) => (
    <Card as={StyledPerson}>
        <Card.Img variant="top" src={info.avatar}/>
        <Card.Body>
            <Card.Title>{info.first_name}</Card.Title>
            <Card.Title>{info.last_name}</Card.Title>
            <Card.Text>{info.email}</Card.Text>
        </Card.Body>
    </Card>
);

export default Person;
