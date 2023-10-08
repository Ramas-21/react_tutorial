import './App.css';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <Profile name = "John" lastName = "Smith"/>
      <Profile name = "Mark" lastName = "Lincoln"/>
      <Profile name = "Charles" lastName = "Abuku"/>
    </div>
  );
}

export default App;
