import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="d-flex justify-content-between">

            <div className="text-warning fw-bold fs-1">

                <Link to='/'>flipkart</Link>


            </div>

            <button className="btn btn-primary">

                <Link to='/todo' className='text-white'>
                    Todo

                </Link>



            </button>

            <div className="btn btn-primary">
                <Link to='/counter' className='text-white'>
                    counter

                </Link>
            </div>
        </div>
    )
}

export default Home
