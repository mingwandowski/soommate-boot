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
			room1Name: "r1",
			room2Name: "r2",
			room3Name: "",
			room4Name: "",
			room5Name: ""
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
        <form className="sign-in-form">
			<div className="form-group">
				<label>Home Name</label>
				<input className="form-control" onChange={changeInput} type="text" name="homeName" placeholder="enter home name" required />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input className="form-control" onChange={changeInput} type="password" name="homePassword" placeholder="create a password" required />
			</div>
			<div>
			    <button className="btn btn-primary btn-block signup-button" onClick={clickSignIn} type="button">Sign In</button>
                <h2>OR</h2>
                <button className="btn btn-primary btn-block signup-button" onClick={clickSignIn} type="button">Sign Up</button>
			</div>
			
        </form>
    );
}

export default HomeSignIn;