import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { locationContext } from '../../App.js';
import Locations from '../Locations/Locations.js';
import fakeData from '../../fakeData/LocationData.js'

const LocationDetail = () => {
    const { placeId } = useParams();
    // const [locations, setLocations] = useContext(locationContext);
    const place = fakeData.find(place => place.id == placeId)
    console.log(place);
    const locationStyle = {
        display: 'flex'
    }
    const placeStyle = {
        width: '30%',
    }
    return (
        <div style={ locationStyle }>
            <div style={placeStyle}>
                <h1>Place Detail:</h1>

                <Locations showBtn={false} location={place}></Locations>

            </div>
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="email" placeholder="Dhaka" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="password" placeholder={place.name} />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Start Booking
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LocationDetail;