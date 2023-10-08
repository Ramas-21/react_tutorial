import './App.css';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <Profile name="John" lastName = "Smith"></Profile>
      <Profile name="Mary" lastName = "Othiambo"></Profile>
    </div>
  );
}

export default App;
