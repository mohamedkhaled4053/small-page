import './App.scss';
import Articles from './components/Articles';
import Landing from './components/Landing';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing />
      <Articles />
    </div>
  );
}

export default App;
