import React from "react";
import axios from "axios";

import './HomeSignUp.css';

function HomeSignUp(props) {

	const defaultHome = {
		homeName: "",
		homePassword: "",
		numOfRooms: 2,
		totalPrice: 0,
		room1Name: "",
		room2Name: "",
		room3Name: "",
		room4Name: "",
		room5Name: ""
	}
	const [home, setHome] = React.useState(defaultHome);

	function changeInput(event) {
		const {name, value} = event.target;
		setHome(prev => {
			return {
				...prev,
				[name]: value
			};
		});
	}

	async function addHome(home) {
		const url = `http://localhost:8080/addHome`;
		console.log("addHome");
		try {
			const config = {
				headers: {
					'content-type': 'application/json',
					"Access-Control-Allow-Origin": "*"
				}
			}
			const res = await axios.post(url, home, config);
			if(res?.data?.status === 'success') {
				const newHome = res.data.data;
				props.setHomeInfo(newHome);
			} else {
				console.log(res);
			}
		} catch (err) {
			console.log(err);
		}
	}

	function clickSignUp(event) {
		console.log(home);
		addHome(home);

		event.preventDefault();
	}

    return (
		<div className="card card-registration my-4">
			<h2>Sign Up Home</h2>
			<form className="sign-up-form">
				<div className="form-group">
					<input className="form-control" onChange={changeInput} type="text" name="homeName" placeholder="Home Name" required />
				</div>
				<div className="form-group">
					<input className="form-control" onChange={changeInput} type="password" name="homePassword" placeholder="Create a Password" required />
					<input className="form-control" type="password" placeholder="Confirm your Password" required />
				</div>
				<div className="form-group">
					<input className="form-control" onChange={changeInput} type="text" name="totalPrice" placeholder="Total Price" required="" />
				</div>
				<div className="form-group row">
					<label className="col-8">Number of Rooms:</label>
					<div className="col-4">
						<select className="form-control" onChange={changeInput} name="numOfRooms" defaultValue={2}>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<input className="form-control" onChange={changeInput} type="text" name="room1Name" placeholder="Room1 Name" />
					<input className="form-control" onChange={changeInput} type="text" name="room2Name" placeholder="Room2 Name" />
					<input className="form-control" onChange={changeInput} type="text" name="room3Name" placeholder="Room3 Name" style={{display: home.numOfRooms > 2 ? "block" : "none"}}/>
					<input className="form-control" onChange={changeInput} type="text" name="room4Name" placeholder="Room4 Name" style={{display: home.numOfRooms > 3 ? "block" : "none"}}/>
					<input className="form-control" onChange={changeInput} type="text" name="room5Name" placeholder="Room5 Name" style={{display: home.numOfRooms > 4 ? "block" : "none"}}/>
				</div>
				<div>
				<button className="btn btn-primary btn-block signup-button" onClick={clickSignUp} type="button">Sign Up</button>
				</div>
				
			</form>
		</div>
    );
}

export default HomeSignUp;