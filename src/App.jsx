import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import Person from './components/Person';
import Auth from './components/Auth';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [data, setData] = useState();

    useEffect(async () => {
        const response = await axios.get(`https://reqres.in/api/users?per_page=12`);
        setData(response.data.data);
    }, []);

    return (
        <Container>
            <Row className="justify-content-center">
                <Auth/>
            </Row>
            <Row className="justify-content-center">
                {data && (
                    data.map(pr => <Person key={pr.id} info={pr}/>
                    ))
                }
            </Row>
        </Container>
    );
}

export default App;
