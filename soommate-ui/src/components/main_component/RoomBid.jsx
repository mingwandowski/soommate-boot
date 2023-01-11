import React from "react";
import './RoomBid.css';

function RoomBid(props) {
    return (
		<div className="card card-registration my-4">
			<form className="bid-form">
				<h2>Give your Bid</h2>
				<p>the sum of each room's bid: 100</p>
				<div className="form-group">
					<input className="form-control" type="text" name="userName" placeholder="Your Name" required />
				</div>
				<div className="form-group">
					<label>{props.homeInfo.room1Name}</label>
					<input className="form-control" type="text" name="room1Price" placeholder="room1 Price" required />
				</div>
				<div className="form-group">
					<label>{props.homeInfo.room2Name}</label>
					<input className="form-control" type="text" name="room2Price" placeholder="room2 Price" required />
				</div>
				<h3>Total Prices Now: {50}</h3>
				<button className="btn btn-secondary btn-block reset-button" type="button">Reset</button>
				<button className="btn btn-primary btn-block calculate-button" type="button">Calculate</button>
			</form>
		</div>
    );
}

export default RoomBid;