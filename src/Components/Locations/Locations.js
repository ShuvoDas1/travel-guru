import React from 'react';
import { Button, Card} from 'react-bootstrap';
import './Locations.css'
const Locations = (props) => {
    const {name,description,img} = props.location;
    // console.log(props.location);

    const handleBookingBtn = () =>{
        console.log('btn clicked');
    }

    return (
        <div className='locations'>
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top"  />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
                <Button onClick = {handleBookingBtn} variant="primary">Booking</Button>
            </Card.Body>
            </Card>
           
        </div>
    );
};

export default Locations;