import React from 'react';
import { Button, Card} from 'react-bootstrap';
import './Locations.css'
const Locations = (props) => {
    const {name,description,img} = props.location;
    return (
        <div className='locations d-flex flex-row'>
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Booking</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Locations;