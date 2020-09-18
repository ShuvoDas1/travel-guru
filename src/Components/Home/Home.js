import React, { useContext, useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import fakeData from '../../fakeData/LocationData.js';
import Locations from '../Locations/Locations';
import sundarban from '../../images/sundorbon.png'
import { locationContext } from '../../App.js';

const Home = () => {
    const [locations,setLocations] = useContext(locationContext);
    // setLocations(fakeData);
    useEffect(() => {
        setLocations(fakeData);
    },[])
    
    return (
        <div className='mt-5 home'>
            {
               locations.map(location => <Locations showBtn={true} location={location}></Locations>)
            }
        </div>

    );
};

export default Home;