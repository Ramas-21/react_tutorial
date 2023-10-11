import {useState} from "react";
function VariableElememt(){
    const [display, setDisplay] = useState(false);

    let output;
    if(display){
        output = <h2>This is conditional rendering</h2>
    }
    else{
        output = <h2>This is not conditional rendering</h2>
    }
    return <div>{output}</div>
}
export default VariableElememt;