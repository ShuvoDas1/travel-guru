import React, { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
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
        display: 'flex',
        marginTop: '30px'
    }
    const placeStyle = {
        width: '60%',
        marginLeft: '30px'
    }
    
    const handleSubmitBtn = () =>{
        console.log('btn clicked')
    }

    return (
        <div style={locationStyle}>
            <div style={placeStyle}>
                <h1>Place Detail:</h1>

                <Locations showBtn={false} location={place}></Locations>

            </div>
            <div >
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <br/>
                        <input class='form-control' type="text" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" placeholder={place.name} readOnly />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Row>
                            <Col>
                                <Form.Label>From</Form.Label>
                                <br/>
                                <input class="form-control" type="date" required/>
                            </Col>
                            <Col>
                                <Form.Label>To</Form.Label>
                                <br/>
                                <input class='form-control' type="date" required/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Button size='lg' onClicked={handleSubmitBtn} variant="warning" type="submit" block>
                        Start Booking
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LocationDetail;