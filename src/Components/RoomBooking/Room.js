import React from 'react';

const Room = (props) => {
    // console.log(props.room);
    const {name,images,price,description} = props.room;
    const roomStyle = {
        display: 'flex',
         borderBottom: "1px solid lightgray",
        marginTop: "10px",
        marginRight: "10px",
        marginLeft: "30px",
        marginBottom: "5px",
        paddingBottom: "5px"
    }
    return (
        <div style={roomStyle}>
            <div>
            <img src={images[0]} style={{width:'250px'}} alt=""/>
            </div>
            <div style={{marginLeft:'20px'}}>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price: ${price}/per night</p>
            </div>
        </div>
    );
};

export default Room;