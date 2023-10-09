function FunctionEvent() {
    function handleClick(){
        console.log("Button is clicked");
    }
    return (
        <div>
            <h2>Handling Event in a function based component</h2>
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}
export default FunctionEvent;