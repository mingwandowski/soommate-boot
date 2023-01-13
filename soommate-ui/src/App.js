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

  const [homeOperation, setHomeOperation] = React.useState('signIn');
  const [homeInfo, setHomeInfo] = React.useState({});
  const [allBidsChangeFlag, setAllBidsChangeFlag] = React.useState(0);
  const [calculateResult, setCalculateResult] = React.useState({});

  return (
    <div className="App">
      <Header />
      <div className='login-component row' style={{display: Object.keys(homeInfo).length === 0 ? "" : "none"}}>
        <div className='introduction col-lg-6'>
          <Introduction />
        </div>
        <div className='signin-signup col-lg-6'>
          <TabBar setOperation={setHomeOperation} homeOperation={homeOperation} />
          {homeOperation === 'signIn' && (<HomeSignIn setHomeInfo={setHomeInfo} setOperation={setHomeOperation} />)}
          {homeOperation === 'signUp' && (<HomeSignUp setHomeInfo={setHomeInfo} />)}
        </div>
      </div>
      <div className='main-component row' style={{display: Object.keys(homeInfo).length === 0 ? "none" : ""}}>
        <div className='home-detail col-lg-6'>
          <HomeDetail homeInfo={homeInfo} allBidsChangeFlag={allBidsChangeFlag} setCalculateResult={setCalculateResult} />
        </div>
        <div className='room-bid col-lg-6'>
          {Object.keys(calculateResult).length === 0 && <RoomBid homeInfo={homeInfo} setAllBidsChangeFlag={setAllBidsChangeFlag} />}
          {Object.keys(calculateResult).length !== 0 && <ResultPage homeInfo={homeInfo} calculateResult={calculateResult} />}
        </div>
      </div>
    </div>
  );
}

export default App;
