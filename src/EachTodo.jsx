import React from 'react'

function EachTodo({hemanth,deleteTodo}) {

    return (
        <div  className="d-flex">
            <h1 className="">{hemanth.todos}</h1>
            <button>Edit</button>
            <button onClick={() => deleteTodo(hemanth.id)}>Delete</button>

        </div>
    )
}

export default EachTodo
