import React from "react";

function RoomBid(props) {
    return (
        <form className="sign-up-form">
            <div className="form-group">
				<label>User Name</label>
				<input className="form-control" type="text" name="userName" placeholder="enter user name" required />
			</div>
            <div className="form-group">
				<label>{props.homeInfo.room1Name}</label>
				<input className="form-control" type="text" name="room1Price" required />
			</div>
            <div className="form-group">
				<label>{props.homeInfo.room2Name}</label>
				<input className="form-control" type="text" name="room2Price" required />
			</div>
        </form>
    );
}

export default RoomBid;