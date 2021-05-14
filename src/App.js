import './App.css';
import Incremental from './components/Increment'
import RandomUser from './components/RandomUser'
import NameCollection from './components/NameCollection'

function App() {
  return (
    <div className="App">
      <h3>incremental</h3>
      <NameCollection />
      <Incremental />
      <RandomUser />
    </div>
  );
}

export default App;
