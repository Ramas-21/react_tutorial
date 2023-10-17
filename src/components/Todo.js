import { useState } from "react";

function Todo(){
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) =>{
        setTodo(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} type="text"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default Todo;