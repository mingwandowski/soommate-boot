import React from "react";
import axios from "axios";

import './HomeSignUp.css';

function HomeSignUp() {

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
			const data = await axios.post(url, home, config);
			if(data !== null) {
				console.log(data);
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
        <form className="sign-up-form">
			<div className="form-group">
				<label>Home Name</label>
				<input className="form-control" onChange={changeInput} type="text" name="homeName" placeholder="enter home name" required />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input className="form-control" onChange={changeInput} type="password" name="homePassword" placeholder="create a password" required />
				<input className="form-control" type="password" placeholder="confirm your password" required />
			</div>
			<div className="form-group">
				<label>Total Price</label>
				<input className="form-control" onChange={changeInput} type="text" name="totalPrice" placeholder="total price" required="" />
			</div>
			<div className="form-group">
				<label>number of rooms:</label>
				<select className="form-control" onChange={changeInput} name="numOfRooms" defaultValue={2}>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<div className="form-group">
				<label>Name of Each Room</label>
				<input className="form-control" onChange={changeInput} type="text" name="room1Name" placeholder="room1 name" />
				<input className="form-control" onChange={changeInput} type="text" name="room2Name" placeholder="room2 name" />
				<input className="form-control" onChange={changeInput} type="text" name="room3Name" placeholder="room3 name" />
				<input className="form-control" onChange={changeInput} type="text" name="room4Name" placeholder="room4 name" />
				<input className="form-control" onChange={changeInput} type="text" name="room5Name" placeholder="room5 name" />
			</div>
			<div>
			<button class="btn btn-primary btn-block signup-button" onClick={clickSignUp} type="button">Sign Up</button>
			</div>
			
        </form>
    );
}

export default HomeSignUp;