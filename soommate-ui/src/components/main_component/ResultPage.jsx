import React, { useState } from 'react';
import './ResultPage.css';

function ResultPage(props) {
    const [showDetails, setShowDetails] = useState(false);
    const result = props.calculateResult;
    const bids = props.bids || [];

    const DetailModal = () => (
        <div className="detail-modal-container">
            <div className="detail-modal-backdrop" onClick={() => setShowDetails(false)}></div>
            <div className="detail-modal">
                <div className="detail-modal-header">
                    <h3>Bidding Details</h3>
                    <button className="close-button" onClick={() => setShowDetails(false)}>×</button>
                </div>
                <div className="detail-modal-body">
                    {bids.map((bid, index) => (
                        <div key={bid.id} className="bid-detail-card">
                            <h4 className="bidder-name">{bid.userName}'s Bid</h4>
                            <div className="bid-prices">
                                {props.homeInfo.room1Name && (
                                    <div className="price-item">
                                        <span className="room-name">{props.homeInfo.room1Name}:</span>
                                        <span className="price-value">${bid.room1Price}</span>
                                    </div>
                                )}
                                {props.homeInfo.room2Name && (
                                    <div className="price-item">
                                        <span className="room-name">{props.homeInfo.room2Name}:</span>
                                        <span className="price-value">${bid.room2Price}</span>
                                    </div>
                                )}
                                {props.homeInfo.numOfRooms > 2 && props.homeInfo.room3Name && (
                                    <div className="price-item">
                                        <span className="room-name">{props.homeInfo.room3Name}:</span>
                                        <span className="price-value">${bid.room3Price}</span>
                                    </div>
                                )}
                                {props.homeInfo.numOfRooms > 3 && props.homeInfo.room4Name && (
                                    <div className="price-item">
                                        <span className="room-name">{props.homeInfo.room4Name}:</span>
                                        <span className="price-value">${bid.room4Price}</span>
                                    </div>
                                )}
                                {props.homeInfo.numOfRooms > 4 && props.homeInfo.room5Name && (
                                    <div className="price-item">
                                        <span className="room-name">{props.homeInfo.room5Name}:</span>
                                        <span className="price-value">${bid.room5Price}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="result-container">
            <div className='result-page card card-registration my-4'>
                <div className="result-header">
                    <h2>
                        <i className="fas fa-star celebration-icon"></i>
                        Congratulations! You Saved 
                        <span className="saved-amount">${result.averageSaved}</span>
                        Each
                        <i className="fas fa-star celebration-icon"></i>
                    </h2>
                </div>
                <div className="card result-card">
                    <div className="card-header">
                        <h5 className="card-title">{props.homeInfo.room1Name}</h5>
                    </div>
                    <div className="card-body row">
                        <h6 className="card-subtitle col-lg-7">{result.room1User}</h6>
                        <h6 className="card-text col-lg-5">${result.room1Price}</h6>
                    </div>
                </div>
                <div className="card result-card">
                    <div className="card-header">
                        <h5 className="card-title">{props.homeInfo.room2Name}</h5>
                    </div>
                    <div className="card-body row">
                        <h6 className="card-subtitle col-lg-7">{result.room2User}</h6>
                        <h6 className="card-text col-lg-5">${result.room2Price}</h6>
                    </div>
                </div>
                <div className="card result-card" style={{display: props.homeInfo.numOfRooms > 2 ? "" : "none"}}>
                    <div className="card-header">
                        <h5 className="card-title">{props.homeInfo.room3Name}</h5>
                    </div>
                    <div className="card-body row">
                        <h6 className="card-subtitle col-lg-7">{result.room3User}</h6>
                        <h6 className="card-text col-lg-5">${result.room3Price}</h6>
                    </div>
                </div>
                <div className="card result-card" style={{display: props.homeInfo.numOfRooms > 3 ? "" : "none"}}>
                    <div className="card-header">
                        <h5 className="card-title">{props.homeInfo.room4Name}</h5>
                    </div>
                    <div className="card-body row">
                        <h6 className="card-subtitle col-lg-7">{result.room4User}</h6>
                        <h6 className="card-text col-lg-5">${result.room4Price}</h6>
                    </div>
                </div>
                <div className="card result-card" style={{display: props.homeInfo.numOfRooms > 4 ? "" : "none"}}>
                    <div className="card-header">
                        <h5 className="card-title">{props.homeInfo.room5Name}</h5>
                    </div>
                    <div className="card-body row">
                        <h6 className="card-subtitle col-lg-7">{result.room5User}</h6>
                        <h6 className="card-text col-lg-5">${result.room5Price}</h6>
                    </div>
                </div>

                <div className="button-group">
                    <button className="btn btn-primary btn-lg" onClick={() => window.location.reload()}>
                        Back to Home
                    </button>
                    <button className="btn btn-secondary btn-lg" onClick={() => setShowDetails(true)}>
                        View Details
                    </button>
                </div>
            </div>

            {showDetails && <DetailModal />}
        </div>
    );
}

export default ResultPage;