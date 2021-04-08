import React from 'react';

const ToDos =({todos, deleteTodo})=>{
    const todolist = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">No ToDo's</p>
    )
    return(
        <div className="todos collections">
            {todolist}
        </div>
    )
}

export default ToDos;