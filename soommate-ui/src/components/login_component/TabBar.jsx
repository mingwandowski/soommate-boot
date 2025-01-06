import React from "react";
import './TabBar.css'

function TabBar(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <button 
                    className={`nav-link custom ${props.homeOperation === 'intro' ? 'active' : ''}`}
                    onClick={() => props.setOperation('intro')}
                >
                    Introduction
                </button>
            </li>
            <li className="nav-item">
                <button 
                    className={`nav-link custom ${props.homeOperation !== 'intro' ? 'active' : ''}`}
                    onClick={() => props.setOperation('signIn')}
                >
                    Get Started
                </button>
            </li>
        </ul>
    );
}

export default TabBar;