import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")


    function usernameFunction(e) {

        setUsername(e.target.value)
    }

    function passwordFunction(e) {


        setPassword(e.target.value)
    }

    async function handleSubmit() {

        let credentials = {
            username : username,
            password : password
        }

        console.log(username,password,'credentials')

        const res = await fetch("http://localhost:5000/api/auth/register", {

            // what is the method u r using
            method : 'POST',

            // what is the content u r sending
            headers : {'Content-Type' : 'application/json'},

            // what is the data

            // json.stringify will convert the javascript obj to json 
            body : JSON.stringify(credentials)
        })

        const data = await res.json();

        console.log(data,"output of the data")



       
    }



    return (

        <div>

            {/*register --- admission in the school */}

            <h1 className='text-center'>Register page</h1>

            <div className='d-flex flex-column align-items-center gap-2'>

                <input type="text" placeholder='enter the username' onChange={(event) => usernameFunction(event)} />

                <input type="text" placeholder='enter the password' onChange={(event) => passwordFunction(event)}/>

                <button className='btn btn-primary' onClick={() => handleSubmit()}>
                    submit
                </button>

                <Link to='/'> to go login page</Link>


            </div>


        </div>

    )
}

export default Register
