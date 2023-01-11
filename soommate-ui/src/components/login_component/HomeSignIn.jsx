import React from "react";
import axios from "axios";

import './HomeSignIn.css';

function HomeSignIn(props) {

	const defaultSignInHome = {
		homeName: "",
		homePassword: ""
	}
	const [home, setHome] = React.useState(defaultSignInHome);

	function changeInput(event) {
		const {name, value} = event.target;
		setHome(prev => {
			return {
				...prev,
				[name]: value
			};
		});
	}

	async function signInHome(signInHome) {
		const demoHome = {
			homeName: "home1",
			homePassword: "123",
			numOfRooms: 2,
			totalPrice: 100,
			room1Name: "master beedroom",
			room2Name: "living room"
		}
		props.setHomeInfo(demoHome);
		const url = `http://localhost:8080/signInHome`;
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

	function clickSignIn(event) {
		console.log(home);
		signInHome(home);

		event.preventDefault();
	}

    return (
		<div className="card card-registration my-4">
			<h2>Sign In Home</h2>
			<form className="sign-in-form">
				<div className="form-group">
					<input className="form-control" onChange={changeInput} type="text" name="homeName" placeholder="Home Name" required />
				</div>
				<div className="form-group">

					<input className="form-control" onChange={changeInput} type="password" name="homePassword" placeholder="Password" required />
				</div>
				<div>
					<button className="btn btn-primary btn-block signup-button" onClick={clickSignIn} type="button">Sign In</button>
					<h4>OR</h4>
					<button className="btn btn-primary btn-block signup-button" onClick={clickSignIn} type="button">Sign Up</button>
				</div>
			</form>
		</div>
    );
}

export default HomeSignIn;