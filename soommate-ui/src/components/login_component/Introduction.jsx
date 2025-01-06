import React, { useState } from 'react';
import './Introduction.css';

function Introduction() {
    const [showDemoModal, setShowDemoModal] = useState(false);

    const DemoModal = () => (
        <>
            <div className="demo-modal-backdrop" onClick={() => setShowDemoModal(false)}></div>
            <div className="demo-modal">
                <button className="close-button" onClick={() => setShowDemoModal(false)}>×</button>
                <h3>Demo Account Information</h3>
                <div className="demo-account-info">
                    <p>Home Name: <span>Demo</span></p>
                    <p>Password: <span>123</span></p>
                </div>
                <p style={{color: '#666', fontSize: '0.9rem'}}>
                    You can use this account to try out our platform's features.
                </p>
            </div>
        </>
    );

    return (
        <div className="introduction">
            <div className="welcome-banner">
                <h1>Welcome to Soommate</h1>
                <p>The smart way to allocate rooms and split rent fairly among roommates. Our system ensures everyone gets their preferred room at a price they're comfortable with.</p>
            </div>

            <div className="step-indicator">
                <div className="step active">
                    <div className="step-number">1</div>
                    <div className="step-label">Create House</div>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-label">Roommates Sign In</div>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-label">Room Bidding</div>
                </div>
                <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-label">View Results</div>
                </div>
            </div>

            <div className="feature-section">
                <div className="feature-item">
                    <h3>Fair Room Assignment</h3>
                    <p>Our algorithm ensures that room assignments and rent splits are fair for everyone involved.</p>
                </div>
                <div className="feature-item">
                    <h3>Real-time Bidding</h3>
                    <p>Participate in real-time bidding to express your room preferences and budget constraints.</p>
                </div>
                <div className="feature-item">
                    <h3>Instant Results</h3>
                    <p>Get immediate results showing optimal room assignments and rent splits based on everyone's preferences.</p>
                </div>
            </div>

            <div className="demo-section">
                <button 
                    className="demo-button"
                    onClick={() => setShowDemoModal(true)}
                >
                    Try Demo
                </button>
            </div>

            {showDemoModal && <DemoModal />}
        </div>
    );
}

export default Introduction;