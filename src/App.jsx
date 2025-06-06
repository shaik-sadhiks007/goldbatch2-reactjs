import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Todo from "./Todo";
import Home from './Home'
import './style.css'


function App() {


  return (

    <div>

      {/* <h1>Counter application</h1>

      <Counter />


      <Todo/> */}


      {/* // for navigation download the react-router-dom */}


      {/* node-modules --- folders we installed */}

      {/* package.json --- which has the history and version of download packages */}


      {/* to implement the page navigation we have to react router dom */}


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>


      </BrowserRouter>






    </div>

  )

}

export default App;