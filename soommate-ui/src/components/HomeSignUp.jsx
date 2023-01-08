import React from "react";
import axios from "axios";

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
        <div>
            <form>
            <input onChange={changeInput} type="text" name="homeName" placeholder="home name" required/>
			<input onChange={changeInput} type="password" name="homePassword" placeholder="create a password" required=""/>
			<input type="password" placeholder="confirm your password" required=""/>
			<input onChange={changeInput} type="text" name="totalPrice" placeholder="total price" required=""/>
			<div>
				<label>number of rooms:</label>
				<span>
					<select onChange={changeInput} name="numOfRooms" defaultValue={2}>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</span>
			</div>
			<input onChange={changeInput} type="text" id="room1Name" name="room1Name" placeholder="room1 name" />
			<input onChange={changeInput} type="text" id="room2Name" name="room2Name" placeholder="room2 name" />
			<input onChange={changeInput} type="text" id="room3Name" name="room3Name" placeholder="room3 name" />
			<input onChange={changeInput} type="text" id="room4Name" name="room4Name" placeholder="room4 name" />
			<input onChange={changeInput} type="text" id="room5Name" name="room5Name" placeholder="room5 name" />
			<button onClick={clickSignUp}>sign up</button>
            </form>
        </div>
    );
}

export default HomeSignUp;