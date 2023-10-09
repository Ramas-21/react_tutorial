function FunctionEvent() {
    function handleClick(){
        console.log("Button is clicked");
    }
    return (
        <div>
            Handling Event in a function based component
            <button onClick={handleClick}>Click here</button>
        </div>
    );
}
export default FunctionEvent;