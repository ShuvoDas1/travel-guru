import React, { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { locationContext } from '../../App.js';
import Locations from '../Locations/Locations.js';
import fakeData from '../../fakeData/LocationData.js'


const LocationDetail = () => {
    const { placeId } = useParams();
    const place = fakeData.find(place => place.id == placeId)
    const locationStyle = {
        display: 'flex',
        margin: '50px'
    }
    const placeStyle = {
        width: '60%',
    }
    const history = useHistory();
    const handleSubmitBtn = () =>{
        history.push('/roombooking');

    }

    return (
        <div style={locationStyle}>
            <div style={placeStyle}>
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
                    <Button size='lg' onClick ={handleSubmitBtn} variant="warning" type="Btn" block>
                        Start Booking
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default LocationDetail;