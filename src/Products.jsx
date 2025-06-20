import React, { useContext, useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import ProductDes from './ProductDes';
import { productscContext } from './productsContext';

function Products() {

    // const [products, setProducts] = useState([]);

    const { products, bhanu } = useContext(productscContext)

    console.log(products, bhanu, 'products')

    const navigate = useNavigate()

    const [sadhik, setSadhik] = useState(20);

    function sadhikincrement() {

        // count = count+ 1

        setSadhik(sadhik + 1)

    }

    useEffect(
        () => {
            const token = localStorage.getItem("token")

            if (token == null) {
                navigate('/')
            }
        }
    )


    // async function fetchProducts() {

    //     const res = await fetch("https://fakestoreapi.com/products");

    //     const data = await res.json();

    //     setProducts(data);


    // }


    //syntax

    // to avoid the multiple api calls i am using the useeffect
    // useEffect(Callback, dependency)

    // [] --- empty dependency ---- one time only that too on the page load,

    // [variable] ---- dependency --- when the variable changes it call the api 

    // without dependency ---- it will call unlimited times


    // useEffect(

    //     () => {

    //         fetchProducts()

    //     },
    //     [sadhik]

    // )


    // breakpoints


    function handleLogout() {
        localStorage.removeItem("token")
        navigate('/')
    }



    return (
        <div>


            <h1>Products</h1>

            <h1>count of sadhik : {sadhik} </h1>

            <button onClick={sadhikincrement}>increment</button>

            {/* <a href="https://www.flipkart.com/">google</a> */}



            <div>
                <button className='btn btn-danger' onClick={() => handleLogout()}>
                    logout 
                </button>
            </div>
            <div className='container' >

                <div className='row'>


                    {


                        products.map((ele, index) => (

                            <div className='col-12 col-sm-12 col-md-6 col-lg-3' key={index}>
                                <div className="card " >


                                    <Link to={`/product-description/${ele.id}`}>
                                        <img src={ele.image} className="card-img-top" alt="images" />
                                    </Link>

                                    <div className="card-body">
                                        <h5 className="card-title">{ele.title}</h5>
                                        <h1>${ele.price}</h1>
                                        <button className='btn btn-warning'> Add to cart </button>
                                    </div>
                                </div>
                            </div>

                        ))

                    }




                </div>


            </div>


        </div>
    )
}

export default Products
