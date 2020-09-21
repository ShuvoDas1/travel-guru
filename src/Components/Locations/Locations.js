import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Locations.css'
import img from '../../images/Sreemongol.png'
const Locations = (props) => {
    const { id, name, description } = props.location;
    const history = useHistory();

    const handleBookingBtn = (id) => {
        history.push('/location/' + id);
    }

    return (
        <>
            {/* <Card style={{ width: '300px', height: '500px', margin: '30px' }}>
                <Card.Img variant="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    {props.showBtn &&
                        <Button onClick={() => handleBookingBtn(id)} variant="primary">Booking</Button>
                    }
                </Card.Body>
            </Card> */}
            <Card style={{ width:'300px',margin:'30px', height:'250px'}}>
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-black">{name}</Card.Title>
                    <Card.Text className="text-light">
                        {description}
                    </Card.Text>
                    {props.showBtn &&
                        <Button onClick={() => handleBookingBtn(id)} variant="primary">Booking</Button>
                    }
                </Card.ImgOverlay>
            </Card>

        </>
    );
};

export default Locations;