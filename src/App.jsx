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




function App() {



  const [products, setProducts] = useState([]);

  const [bhanu, setBhanu] = useState('hemanth');


  async function fetchProducts() {

    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    setProducts(data);

  }

  useEffect(

    () => {

      fetchProducts()

    },
    []

  )



  {/* <h1>Counter application</h1>

      <Counter />


      <Todo/> */}


  {/* // for navigation download the react-router-dom */ }


  {/* node-modules --- folders we installed */ }

  {/* package.json --- which has the history and version of download packages */ }


  {/* to implement the page navigation we have to react router dom */ }

  return (










    <productscContext.Provider value={{products,bhanu}}>



      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-description/:id" element={<ProductDes />} />

        </Routes>

      </BrowserRouter>

    </productscContext.Provider>







  )

}

export default App;