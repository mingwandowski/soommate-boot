import React from "react";
import './ResultPage.css';

function ResultPage(props) {

    const result = props.calculateResult;

    return (
        <div className='result-page card card-registration my-4'>
            <h2>You Saved {result.averageSaved} Each!</h2>
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

            <button className="btn btn-primary btn-lg" onClick={() => window.location.reload()}>Back to Home</button>
        </div>
    );
}

export default ResultPage;