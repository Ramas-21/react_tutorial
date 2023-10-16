import './App.css';
import Profile from './components/Profile';
import Message from './components/Message';
import Counter from './components/Counter';
import Destructuring from './components/Destructuring';
import Destructuring2 from './components/Destructuring2';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionState from './components/FunctionState';
import ConditionalRendering from './components/ConditionalRendering';
import VariableElememt from './components/VariableElement';
import TernaryOperator from './components/TernaryOperator';
import ListRendering from './components/ListRendering';
import RenderingListOfObjects from './components/RenderingListOfObjects';
import HandlingUserInput from './components/HandlingUserInput';
function App() {
  return (
    <div className="App">
      <Profile name="John" lastName = "Smith"></Profile>
      <Profile name="Mary" lastName = "Othiambo"></Profile>
      <Message messageContent = "This is a message from class props"></Message>
      <Counter></Counter>
      <Destructuring name = "Lawrence" lastName = "Home"></Destructuring>
      <Destructuring2 name = "...Lawrence"></Destructuring2>
      <FunctionEvent></FunctionEvent>
      <ClassEvent></ClassEvent>
      <FunctionState></FunctionState>
      <ConditionalRendering></ConditionalRendering>
      <VariableElememt></VariableElememt>
      <TernaryOperator></TernaryOperator>
      <ListRendering></ListRendering>
      <RenderingListOfObjects></RenderingListOfObjects>
      <HandlingUserInput></HandlingUserInput>
    </div>
  );
}

export default App;
