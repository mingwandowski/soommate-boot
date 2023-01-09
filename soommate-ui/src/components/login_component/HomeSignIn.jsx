import React from "react";
import axios from "axios";

import './HomeSignIn.css';

function HomeSignIn() {

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
			    <button class="btn btn-primary btn-block signup-button" onClick={clickSignIn} type="button">Sign In</button>
                <h2>OR</h2>
                <button class="btn btn-primary btn-block signup-button" onClick={clickSignIn} type="button">Sign Up</button>
			</div>
			
        </form>
    );
}

export default HomeSignIn;