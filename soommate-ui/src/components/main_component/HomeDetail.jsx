import React from "react";
import axios from "axios";
import './HomeDetail.css';

function HomeDetail(props) {
    const { bids, setBids } = props;

    React.useEffect(() => {
        getBids(props.homeInfo.homeName)
    }, [props.homeInfo.homeName, props.allBidsChangeFlag]);

    async function getBids(homeName) {
        const url = `${global.config.BACKEND_URL}/getBids?homeName=${homeName}`;
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
        const url = `${global.config.BACKEND_URL}/calculate?homeName=${homeName}`;
        try {
            const res = await axios.get(url);
            if(res?.data?.status === 'success') {
                props.setCalculateResult(res.data.data);
            } else {
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="home-detail-container">
            <div className="welcome-header">
                <h2>Welcome to {props.homeInfo.homeName}</h2>
            </div>
            
            <div className="room-info">
                <div className="room-info-item">
                    <div className="room-info-label">Total Rooms</div>
                    <div className="room-info-value">{props.homeInfo.numOfRooms}</div>
                </div>
                <div className="room-info-item">
                    <div className="room-info-label">Total Price</div>
                    <div className="room-info-value">${props.homeInfo.totalPrice}</div>
                </div>
            </div>

            <div className="bidders-section">
                <div className="bidders-header">
                    <i className="fas fa-users"></i>
                    Current Bidders
                </div>
                <ul className="bidders-list">
                    {bids.map(bid => (
                        <li key={bid.id} className="bidder-item">
                            {bid.userName}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="floor-plan-section">
                <img 
                    src="https://th.bing.com/th/id/R.efd0fa5a74464be10d5a81f743786556?rik=QWouOHVvcdRdGg&riu=http%3a%2f%2fthe2d3dfloorplancompany.com%2fwp-content%2fuploads%2f2018%2f04%2f3D-Floor-Plan-General-Style.jpg&ehk=38h6oDCH1DC3x8OP1KbXsx%2bgLaNQZMlY7%2flhXUitWrs%3d&risl=&pid=ImgRaw&r=0"
                    alt="Floor Plan" 
                    className="img-fluid"
                />
                <p className="floor-plan-caption">(Sample Floor Plan)</p>
            </div>

            {bids.length >= props.homeInfo.numOfRooms && (
                <button 
                    className="show-result-button"
                    onClick={() => calculateResult(props.homeInfo.homeName)}
                >
                    Show Result
                </button>
            )}
        </div>
    );
}

export default HomeDetail;