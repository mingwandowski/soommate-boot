import React from "react";
import './HomeDetail.css';

function HomeDetail(props) {
    return (
        <div>
            <h2>Welcome to {props.homeInfo.homeName}</h2>
            <h3>{props.homeInfo.numOfRooms} rooms with a total price of: {props.homeInfo.totalPrice}</h3>
            <div className="bidder row">
					<label className="col-4">bidder(s)</label>
					<ul className="col-8">
						<li>Tom</li>
						<li>Jimmy</li>
					</ul>
				</div>
            <img src="https://th.bing.com/th/id/R.efd0fa5a74464be10d5a81f743786556?rik=QWouOHVvcdRdGg&riu=http%3a%2f%2fthe2d3dfloorplancompany.com%2fwp-content%2fuploads%2f2018%2f04%2f3D-Floor-Plan-General-Style.jpg&ehk=38h6oDCH1DC3x8OP1KbXsx%2bgLaNQZMlY7%2flhXUitWrs%3d&risl=&pid=ImgRaw&r=0"
                alt="" class="img-fluid"
            />
            <p>(sample image)</p>
        </div>
    );
}

export default HomeDetail;