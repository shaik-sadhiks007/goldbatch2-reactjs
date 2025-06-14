import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="d-flex justify-content-evenly">

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

            <div className="btn btn-primary">
                <Link to='/products' className='text-white'>
                    products

                </Link>
            </div>


            {/* <div className="btn btn-primary">
                <Link to='/product-description' className='text-white'>
                    products description page

                </Link>
            </div> */}
        </div>
    )
}

export default Header
