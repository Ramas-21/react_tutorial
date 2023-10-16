import {useState} from "react";
function TernaryOperator(){
    const [display, setDisplay] = useState(false);

    return display ? (
        <div>
            <h3>This is conditional component</h3>
        </div>
    ) : (
        <div>
            <h3>This is not a conditional component</h3>
        </div>
    );
}
export default TernaryOperator;