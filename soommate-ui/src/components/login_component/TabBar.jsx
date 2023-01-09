import React from "react";

function TabBar(props) {

    const [SIGNIN, SIGNUP] = ['signIn', 'signUp'];
    const [activeTab, setActiveTab] = React.useState(SIGNIN);

    function clickSignIn() {
        setActiveTab(SIGNIN);
        props.setOperation(SIGNIN);
    }

    function clickSignUp() {
        setActiveTab(SIGNUP);
        props.setOperation(SIGNUP);
    }

    return (
        <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
                <button className={activeTab === 'signIn' ? 'nav-link active' : 'nav-link'} onClick={clickSignIn} >Sign In</button>
            </li>
            <li className="nav-item">
                <button className={activeTab === 'signUp' ? 'nav-link active' : 'nav-link'} onClick={clickSignUp} >Sign Up</button>
            </li>
        </ul>
    );
}

export default TabBar;