import React from "react";
import axios from "axios";
import './HomeDetail.css';

function HomeDetail(props) {

    const [bids, setBids] = React.useState([]);

    React.useEffect(() => {
        getBids(props.homeInfo.homeName)

    }, [props.homeInfo.homeName, props.allBidsChangeFlag]);

    async function getBids(homeName) {
        const url = `http://localhost:8080/getBids?homeName=${homeName}`;
        try {
            const res = await axios.get(url);
            if(res?.data?.status === 'success') {
                setBids(res.data.data);
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function calculateResult(homeName) {
        const url = `http://localhost:8080/calculate?homeName=${homeName}`;
        try {
            const res = await axios.get(url);
            if(res?.data?.status === 'success') {
                props.setCalculateResult(res.data.data);
                console.log(res.data.data);
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
    }

    function clickShowResult() {
        calculateResult(props.homeInfo.homeName);
    }

    return (
        <div>
            <h2>Welcome to {props.homeInfo.homeName}</h2>
            <h3>{props.homeInfo.numOfRooms} rooms with a total price of: {props.homeInfo.totalPrice}</h3>
            <div className="bidder row">
					<label className="col-4">bidder(s)</label>
					<ul className="col-8">
                        {bids.map(bid => {
                            return (<li key={bid.id}>{bid.userName}</li>);
                        })}
					</ul>
				</div>
            <img src="https://th.bing.com/th/id/R.efd0fa5a74464be10d5a81f743786556?rik=QWouOHVvcdRdGg&riu=http%3a%2f%2fthe2d3dfloorplancompany.com%2fwp-content%2fuploads%2f2018%2f04%2f3D-Floor-Plan-General-Style.jpg&ehk=38h6oDCH1DC3x8OP1KbXsx%2bgLaNQZMlY7%2flhXUitWrs%3d&risl=&pid=ImgRaw&r=0"
                alt="" className="img-fluid"
            />
            <p>(sample image)</p>
            <button className="btn btn-lg btn-dark" onClick={clickShowResult} disabled={props.homeInfo.numOfRooms > bids.length}>SHOW RESULT!</button>
        </div>
    );
}

export default HomeDetail;