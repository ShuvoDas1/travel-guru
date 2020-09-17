import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import fakeData from '../../fakeData/LocationData';
import Locations from '../Locations/Locations';
import images from '../../images';

const Home = () => {
    // const [locations,setLocations] = useState([])
    // setLocations(fakeData);
    // useEffect(() => {
    //     setLocations(fakeData);
    // },[])
    // console.log(locations);
    const locations = [
        {
            id: 1,
            name: 'COX`S BAZAR',
            description: 'Cox`s Bazar sea beach is the longest sea beach in the world, 120 km long, having no 2nd instance. The wavy water of Bay of Bengal touches the beach throughout this 120 km.For Bangladeshi`s it doesn`t get much better than Cox`s Bazar, the country`s most popular beach town than the other one Kuakata beach town',
            img: '../../images/Sajek.png'

        }, 
        {
            id: 2,
            name: 'SREEMANGAL',
            description: 'Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here.'

        },
        {
            id: 1,
            name: 'SUNDARBANS',
            description: 'Tribune Experts said that the trail of devastation the Amphan left would have been much higher, had the Sundarbans not been there The Sundarbans have once again acted as a biological protective shield against cyclones and typhoons, as observed through its resistance against the severe cyclonic storm Amphan.'
        }
    ]
    // console.log(fakeData);
    return (
        <div className='mt-5 home'>
            {
               locations.map(location => <Locations location={location}></Locations>)
            }
        </div>

    );
};

export default Home;