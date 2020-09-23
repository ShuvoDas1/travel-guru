import React, { useEffect, useState } from 'react';
import Map from './Map';
import Room from './Room';

const RoomBooking = () => {
    const [room,setRoomList] = useState([]);
    useEffect(() => {
        const url = 'https://fake-hotel-api.herokuapp.com/api/hotels';
        fetch(url)
        .then(res => res.json())
        .then(data => setRoomList(data))
    },[])
    const hotel10 = room.slice(0,10);
    return (
        <div>
           <div>
           {
                hotel10.map(room => <Room room={room}></Room>)
            }
           </div>
           <div>
               <Map></Map>
           </div>
        </div>
    );
};

export default RoomBooking;