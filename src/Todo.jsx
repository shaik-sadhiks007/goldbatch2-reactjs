import { use, useEffect, useState } from "react";
import EachTodo from "./EachTodo";


function Todo() {

    const [todos, setTodos] = useState([])

    const [title, setTitle] = useState('')


    const fetchTodos = async () => {

        const res = await fetch("http://localhost:5000/api/todo");

        const data = await res.json()

        console.log(data, 'data')

        setTodos(data)

    }

    useEffect(
        () => {
            fetchTodos()
        }, []
    )

    // function handleTitleUpdate(event) {

    //     setTitle(event.target.value);

    // }

    // console.log(title,'title')


    async function handleSubmit() {

        console.log("hangle submit")

        const res = await fetch("http://localhost:5000/api/todo",{
            method : "POST",
            headers : {'Content-Type' : "application/json"},
            body : JSON.stringify(
                {
                    title : title
                }
            )
        });

        

        const data = await res.json();

        fetchTodos()

        console.log(data,'data in post')



    }



    return (

        <>
            <h1 className="text-primary">this is Todo app</h1>

            <input type="text" placeholder="enter the todo title"

                onChange={(event) => setTitle(event.target.value)}

            />

            <button onClick={() => handleSubmit()}>submit</button>

            {
                todos.map((ele, index) => (
                    <div key={index}>
                        {/* <input type="checkbox" /> */}

                        {ele.title}

                        <div>
                            <button>delete</button>
                        </div>

                    </div>
                ))
            }



        </>

    )
}

export default Todo;

