import React from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/login_component/Introduction';
import TabBar from './components/login_component/TabBar';
import HomeSignUp from './components/login_component/HomeSignUp';
import HomeSignIn from './components/login_component/HomeSignIn';
import HomeDetail from './components/main_component/HomeDetail';
import RoomBid from './components/main_component/RoomBid';
import ResultPage from './components/main_component/ResultPage';

function App() {

  const [homeOperation, setHomeOperation] = React.useState('intro');
  const [homeInfo, setHomeInfo] = React.useState({});
  const [allBidsChangeFlag, setAllBidsChangeFlag] = React.useState(0);
  const [calculateResult, setCalculateResult] = React.useState({});
  const [authStep, setAuthStep] = React.useState('signIn');
  const [bids, setBids] = React.useState([]);

  const canShowResult = bids.length >= (homeInfo.numOfRooms || 0);

  return (
    <div className="App">
      <Header />
      <div className='main-tabs'>
        <TabBar setOperation={setHomeOperation} homeOperation={homeOperation} />
      </div>
      
      <div className='intro-component' style={{display: homeOperation === 'intro' ? "" : "none"}}>
        <Introduction />
      </div>

      <div className='operation-component' style={{display: homeOperation !== 'intro' ? "" : "none"}}>
        <div className='auth-tabs' style={{display: Object.keys(homeInfo).length === 0 ? "" : "none"}}>
          <div className="auth-toggle">
            <button 
              className={`auth-btn ${authStep === 'signIn' ? 'active' : ''}`}
              onClick={() => setAuthStep('signIn')}
            >
              Sign In
            </button>
            <button 
              className={`auth-btn ${authStep === 'signUp' ? 'active' : ''}`}
              onClick={() => setAuthStep('signUp')}
            >
              Sign Up
            </button>
          </div>
          <div className='signin-signup col-lg-6 mx-auto'>
            {authStep === 'signIn' && (<HomeSignIn setHomeInfo={setHomeInfo} setOperation={setAuthStep} />)}
            {authStep === 'signUp' && (<HomeSignUp setHomeInfo={setHomeInfo} />)}
          </div>
        </div>
        
        <div className='main-component row' style={{display: Object.keys(homeInfo).length === 0 ? "none" : ""}}>
          <div className='home-detail col-lg-6'>
            <HomeDetail 
              homeInfo={homeInfo} 
              allBidsChangeFlag={allBidsChangeFlag} 
              setCalculateResult={setCalculateResult}
              bids={bids}
              setBids={setBids}
            />
          </div>
          <div className='room-bid col-lg-6'>
            {Object.keys(calculateResult).length === 0 && 
              <RoomBid 
                homeInfo={homeInfo} 
                setAllBidsChangeFlag={setAllBidsChangeFlag} 
                canShowResult={canShowResult}
              />
            }
            {Object.keys(calculateResult).length !== 0 && 
              <ResultPage 
                homeInfo={homeInfo} 
                calculateResult={calculateResult} 
                bids={bids}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
