import './App.css';
import Incremental from './components/Increment'
import RandomUser from './components/RandomUser'
import NameCollection from './components/NameCollection'
import UserInfo from './components/UserInfo'
import FetchUserInfo from './components/FetchUserInfo';

function App() {
  return (
    <div className="App">
      {/* <NameCollection /> */}
      {/* <Incremental /> */}
      {/* <RandomUser /> */}
      {/* <UserInfo /> */}
      <FetchUserInfo />
    </div>
  );
}

export default App;
