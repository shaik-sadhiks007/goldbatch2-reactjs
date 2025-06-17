import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Todo from "./Todo";
import Home from './Home'
import './style.css'
import Header from "./Header";
import Products from "./Products";
import ProductDes from "./ProductDes";
import { productscContext } from "./productsContext";
import { useEffect, useState } from "react";
import Overview from "./Overview";
import Register from "./Register";




function App() {



  const [products, setProducts] = useState([]);

  // let a = 5

  // a = 3

  const [bhanu, setBhanu] = useState('hemanth');


  async function fetchProducts() {

    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json(); // to retrive data from the res

    setProducts(data);

  }


  useEffect(


    () => {
      fetchProducts()
    }, []


  )

  // useEffect(

  //   () => {

  //     fetchProducts()

  //   },
  //   [] // only one time that too on page load

  // )



  {/* <h1>Counter application</h1>

      <Counter />


      <Todo/> */}


  {/* // for navigation download the react-router-dom */ }


  {/* node-modules --- folders we installed */ }

  {/* package.json --- which has the history and version of download packages */ }


  {/* to implement the page navigation we have to react router dom */ }

  return (





    <>




      <productscContext.Provider value={{ products, bhanu }}>



        <BrowserRouter>

          {/* <Header /> */}

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-description/:id" element={<ProductDes />} />
            <Route path="/register" element={<Register />} />



          </Routes>

        </BrowserRouter>

      </productscContext.Provider>

      {/* <Overview /> */}

    </>





  )

}

export default App;