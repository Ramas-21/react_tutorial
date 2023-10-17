import { useState } from "react";

function Todo(){
    const [todo, setTodo] = useState("");
    const handleChange = (event) =>{
        setTodo(event.target.value);
    }
    return (
        <div>
            <form>
                <input value={todo} onChange={handleChange} type="text"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default Todo;