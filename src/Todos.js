import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="todo-item" key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)}> {todo.content} </span>
                </div>
            )
        })
    ) : (
        <div className="todo-empty">
            <span>No Todos!</span>
        </div>
    )

    return(
        <div className="todos-container">
            {todoList}
        </div>
    )
}

export default Todos