import './App.css';
import Header from './components/Header';
import Introduction from './components/start_component/Introduction';
import HomeSignUp from './components/start_component/HomeSignUp';
import HomeSignIn from './components/start_component/HomeSignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='login-component row'>
        <div className='introduction col-lg-6'>
          <Introduction />
        </div>
        <div className='signin-signup col-lg-6'>
          {/* <HomeSignUp /> */}
          <HomeSignIn />
        </div>
      </div>
      <div className='main-component'>
      </div>
    </div>
  );
}

export default App;
