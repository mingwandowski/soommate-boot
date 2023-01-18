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
		const url = `${global.config.BACKEND_URL}/signInHome`;
		try {
			const config = {
				headers: {
					'content-type': 'application/json',
					"Access-Control-Allow-Origin": "*"
				}
			}
			const res = await axios.post(url, signInHome, config);
			if(res?.data?.status === 'success') {
				const resultHome = res.data.data;
				props.setHomeInfo(resultHome);
			} else if(res?.data?.status === 'failed') {
				alert(res?.data?.msg);
			} else {
				console.log(res);
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

	function clickSignUp(event) {
		props.setOperation('signUp');

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
					<button className="btn btn-primary btn-block signup-button" onClick={clickSignUp} type="button">Sign Up</button>
				</div>
			</form>
		</div>
    );
}

export default HomeSignIn;