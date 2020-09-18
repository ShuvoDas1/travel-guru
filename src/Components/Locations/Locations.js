import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Locations.css'
const Locations = (props) => {
     console.log(props);
    const {id,name,description} = props.location;
    //  console.log(name);
    const history = useHistory();

    const handleBookingBtn = (id) =>{
        history.push('/booking/'+ id);
    }

    return (
        <div className='locations'>
            <Card style={{ width:'40%',height: '300px'}}>
            <Card.Img variant="top"  />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
                { props.showBtn &&
                    <Button onClick = {() => handleBookingBtn(id)} variant="primary">Booking</Button>
                }
            </Card.Body>
            </Card>
           
        </div>
    );
};

export default Locations;