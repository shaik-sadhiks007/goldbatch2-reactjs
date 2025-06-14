import { useState } from "react";
import EachTodo from "./EachTodo";


function Todo() {

    const [todos, setTodos] = useState([

        {
            id: 1,
            todos: "wake up in the morning"
        },
        {
            id: 2,
            todos: "do homework"
        },

    ])

    function deleteTodo(index) {

        console.log(index, "clicked button");

        console.log(todos, 'todos')

        const newTodo = todos.filter((ele,pos) => ele.id !== index )


        console.log(newTodo, "deletetodo")

        setTodos(newTodo);




    }

    return (

        <>
            <h1 className="text-primary">this is Todo app</h1>

            {
                todos.map((ele, index) => (


                    // concept name is props ---- this is state management

                    // when u use the props , u can able to send the from parent to child and child to parent

                    <EachTodo hemanth={ele} key={index} deleteTodo={deleteTodo} />

                ))
            }

        </>

    )
}

export default Todo;

