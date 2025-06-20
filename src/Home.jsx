import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {


    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState(null)

    const navigate = useNavigate() // i am initiasing the function


    useEffect(
        () => {
            const token = localStorage.getItem("token")

            if (token != null) {

                navigate('/products')

            } else {
                navigate('/')
            }
        }
    )


    function usernameFunction(e) {

        setUsername(e.target.value)
    }

    function passwordFunction(e) {


        setPassword(e.target.value)
    }



    async function handleLogin() {

        let credentials = {

            // username : username,
            // password : password

            username, password


        }

        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials) // js obj to json
        })

        const data = await res.json(); // {token,message}

        if (res.status === 200) {
            navigate('/products')
            localStorage.setItem("token", data.token);

        } else {
            console.log("elsse is  excuting")
            setMessage("wrong credentials")

            console.log(message, "msg")
        }


        // create and send data from frontend to backend --- post --- 

        // read --- get  --- if you call the function it will give the data, in get function we can't send the data


        // update -- put , patch

        // delete --- delete


        // ternary --- if else ---

        // (condition) ? if block : else block
    }


    return (
        <div>
            <h1 className='text-center'>Login page</h1>

            <div className='text-center'>

                {
                    (message == null) ? '' : message
                }

            </div>

            <div className='d-flex flex-column align-items-center gap-2'>

                <input type="text" placeholder='enter the username' onChange={(event) => usernameFunction(event)} />

                <input type="text" placeholder='enter the password' onChange={(event) => passwordFunction(event)} />

                <button className='btn btn-primary' onClick={() => handleLogin()}>
                    submit
                </button>

                <Link to='/register'>go to register page</Link>

            </div>


        </div>
    )
}

export default Home
