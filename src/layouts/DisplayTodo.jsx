import { useState } from "react"

const DisplayTodo = (props) => {
    const [sort, setSort] = useState("active")
    return (
        <div className="displaytodo">
            <div className="buttons">
                <button onClick={()=>setSort("active")} >Active</button>
                <button onClick={()=>setSort("complete")}>Completed</button>
                <button onClick={()=>setSort("active")}>All</button>
            </div>

            <ul>
                {
                    props.todos.length > 0 &&
                }
            </ul>
        </div>
    )
}

export default DisplayTodo