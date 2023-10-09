import {useState} from "react"
function FunctionState(){
const [counter, setCounter] = useState(0);
const increment = () =>{
    setCounter(counter + 1);
}
return(
    <div>
        <div>
            <h1>Counter is: {counter}</h1>
        </div>
        <div>
            <button onClick = {increment}>Increment</button>
        </div>
    </div>

)
}
export default FunctionState;