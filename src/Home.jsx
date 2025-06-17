import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1 className='text-center'>Login page</h1>

            <div className='d-flex flex-column align-items-center gap-2'>

                <input type="text" placeholder='enter the username' />

                <input type="text" placeholder='enter the password' />

                <button className='btn btn-primary'>
                    submit
                </button>

                <Link to='/register'>go to register page</Link>

            </div>


        </div>
    )
}

export default Home
