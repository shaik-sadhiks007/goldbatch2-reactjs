import { use, useEffect, useState } from "react";
import EachTodo from "./EachTodo";


function Todo() {

    const [todos, setTodos] = useState([])

    const [title, setTitle] = useState('');

    const [openModal, setOpenModal] = useState(false)

    const [editTodoId, setEditTodoId] = useState('')

    const [editTodoTittle, setEditTodoTittle] = useState('')



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

        const res = await fetch("http://localhost:5000/api/todo", {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(
                {
                    title: title
                }
            )
        });



        const data = await res.json();

        fetchTodos()

        console.log(data, 'data in post')



    }


    async function handleDeleteAll() {

        const res = await fetch("http://localhost:5000/api/todo", {
            method: "DELETE",
        });

        const data = await res.json();

        console.log(data, 'data in deleteall')

        fetchTodos()

    }


    async function handleSpecificDelete(id) {

        console.log(id, 'id')


        const res = await fetch(`http://localhost:5000/api/todo/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        console.log(data, 'data in deleteone')

        fetchTodos()

    }

    function handleEditTodo(id) {

        setOpenModal(true)

        setEditTodoId(id)
        console.log(id, 'id in url')

    }

    async function handleSaveChanges() {

        console.log(editTodoId, editTodoTittle, 'id in save changes')

        const res = await fetch(`http://localhost:5000/api/todo/${editTodoId}`, {
            method: "PUT",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(
                {
                    title: editTodoTittle
                }
            )
        });

        const data = await res.json()

        console.log(data, 'data')

        setOpenModal(false)

        fetchTodos()

    }


    async function handleCheckboxChange(id, comp) {

        console.log(comp, 'cop')

        const res = await fetch(`http://localhost:5000/api/todo/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(
                {
                    completed: !comp
                }
            )
        });

        fetchTodos()


    }


    return (

        <>


            {
                openModal ? (
                    <div class="modal d-block" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">edit title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Todo :
                                    <input type="text" placeholder="enter todo" onChange={(event) => setEditTodoTittle(event.target.value)} />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setOpenModal(false)}>Close</button>
                                    <button type="button" class="btn btn-primary" onClick={() => handleSaveChanges()}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }



            <h1 className="text-primary">this is Todo app</h1>

            <input type="text" placeholder="enter the todo title"

                onChange={(event) => setTitle(event.target.value)}

            />

            <button onClick={() => handleSubmit()}>submit</button>

            <div>
                <button onClick={() => handleDeleteAll()}>
                    delete All todos

                </button>
            </div>

            {
                todos.map((ele, index) => (
                    <div key={index} className="d-flex">


                        <input type="checkbox" checked={ele.completed} onChange={() => handleCheckboxChange(ele._id, ele.completed)} />

                        <div>{ele.title}</div>

                        <div>
                            <button onClick={() => handleEditTodo(ele._id)}>Edit</button>
                            <button onClick={() => handleSpecificDelete(ele._id)}>delete</button>
                        </div>

                    </div>
                ))
            }






        </>

    )
}

export default Todo;

