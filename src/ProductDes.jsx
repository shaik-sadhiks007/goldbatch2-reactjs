import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productscContext } from './productsContext';

function ProductDes({hemanth}) {


    // useparams is a function which is get the data in the url

    console.log(hemanth,"data in the prodcut des");

    const {products} = useContext(productscContext);

   

    const [productDes, setProductDes] = useState({});

    const { id } = useParams();

    console.log(typeof(id))

  

    console.log(products, 'products')

    function filteredData() {

        console.log("function is called")


        let newData = products.filter((ele, index) => id == ele.id);

        setProductDes(newData[0])

        console.log(newData,"new data")
    }




    useEffect (
        () => {
            filteredData()
        },

        [products]

    )




    // // {
    // //     id : 7,
    // //     name : 'bag'
    // // }


    // console.log(id ,name ,'clicked id')


    return (
        <div>
            product description page

            <h1>{productDes?.title}</h1>
            <img src={productDes?.image} alt="" width={'300px'}/>
            <p>{productDes?.description}</p>


        </div>
    )
}

export default ProductDes
