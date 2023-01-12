import React from "react";
import axios from "axios";

import './RoomBid.css';

function RoomBid(props) {

	const homeInfo = props.homeInfo;
	const defaultBid = {
		userName: "",
		homeName: "",
		room1Price: "",
		room2Price: "",
		room3Price: "",
		room4Price: "",
		room5Price: ""
	}
	const [bid, setBid] = React.useState(defaultBid);

	function changeInput(event) {
		const {name, value} = event.target;
		setBid(prev => {
			return {
				...prev,
				homeName: homeInfo.homeName,
				[name]: value
			};
		});
	}

	function resetBid() {
		setBid(defaultBid);
	}

	async function addBid(bid) {
		const url = `http://localhost:8080/addBid`;
		console.log("addBid");
		try {
			const config = {
				headers: {
					'content-type': 'application/json',
					"Access-Control-Allow-Origin": "*"
				}
			}
			const res = await axios.post(url, bid, config);
			if(res?.data?.status === 'success') {
				const newBid = res.data.data;
				console.log(newBid);
				resetBid();
				props.setAllBidsChangeFlag(prev => prev + 1);
			} else {
				console.log(res);
			}
		} catch (err) {
			console.log(err);
		}
	}

	function clickSubmit(event) {
		console.log(bid);
		addBid(bid);
		
		event.preventDefault();
	}

    return (
		<div className="card card-registration my-4">
			<form className="bid-form">
				<h2>Give your Bid</h2>
				<br />
				<div className="form-group">
					<input className="form-control" type="text" name="userName" value={bid.userName} placeholder="Your Name" required onChange={changeInput} />
				</div>
				<div className="form-group">
					<label>{homeInfo.room1Name}</label>
					<input className="form-control" type="text" name="room1Price" value={bid.room1Price} placeholder="room1 Price" onChange={changeInput} />
				</div>
				<div className="form-group">
					<label>{homeInfo.room2Name}</label>
					<input className="form-control" type="text" name="room2Price" value={bid.room2Price} placeholder="room2 Price" onChange={changeInput} />
				</div>
				<div className="form-group" style={{display: homeInfo.numOfRooms > 2 ? "block" : "none"}}>
					<label>{homeInfo.room3Name}</label>
					<input className="form-control" type="text" name="room3Price" value={bid.room3Price} placeholder="room3 Price" onChange={changeInput} />
				</div>
				<div className="form-group" style={{display: homeInfo.numOfRooms > 3 ? "block" : "none"}}>
					<label>{homeInfo.room4Name}</label>
					<input className="form-control" type="text" name="room4Price" value={bid.room4Price} placeholder="room4 Price" onChange={changeInput} />
				</div>
				<div className="form-group" style={{display: homeInfo.numOfRooms > 4 ? "block" : "none"}}>
					<label>{homeInfo.room5Name}</label>
					<input className="form-control" type="text" name="room5Price" value={bid.room5Price} placeholder="room5 Price" onChange={changeInput} />
				</div>
				<h4>Sum of Prices Now: {1000}</h4>
				<button className="btn btn-secondary btn-block reset-button" type="reset" onClick={resetBid}>Reset</button>
				<button className="btn btn-primary btn-block submit-button" type="button" onClick={clickSubmit}>Submit</button>
			</form>
		</div>
    );
}

export default RoomBid;