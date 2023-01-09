import React from "react";

function HomeDetail(props) {
    return (
        <div>
            <h2>Welcome to {props.homeInfo.homeName}</h2>
            <h2>Total Price: {props.homeInfo.totalPrice}</h2>
            <h2>{props.homeInfo.numOfRooms} rooms</h2>
        </div>
    );
}

export default HomeDetail;