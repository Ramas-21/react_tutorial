import './App.css';
import Profile from './components/Profile';
import Message from './components/Message';
import Counter from './components/Counter';
import Destructuring from './components/Destructuring';
function App() {
  return (
    <div className="App">
      <Profile name="John" lastName = "Smith"></Profile>
      <Profile name="Mary" lastName = "Othiambo"></Profile>
      <Message messageContent = "This is a message from class props"></Message>
      <Counter></Counter>
      <Destructuring name = "Lawrence" lastName = "Home"></Destructuring>
    </div>
  );
}

export default App;
