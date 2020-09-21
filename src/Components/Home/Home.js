import React, { useContext, useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import fakeData from '../../fakeData/LocationData.js';
import Locations from '../Locations/Locations';



const Home = () => {
    const [locations,setLocations] = useState([])
    useEffect(() => {
        setLocations(fakeData);
    },[])
    const style = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    return (
        <div className='home' style={style}>
            {
               locations.map(location => <Locations showBtn={true} location={location}></Locations>)
            }
        </div>

    );
};

export default Home;