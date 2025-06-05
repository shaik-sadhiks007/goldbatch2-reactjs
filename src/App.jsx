import Todo from './Todo.jsx'
import { useState } from 'react';

function App() {

  // js --- to be implemented before return


  // useState ---- function (hooks) which is used to update the html


  // syntax ----

  // instead of creating variables like

  // let sadhik = 5;  --- creating

  // sadhik = 7 --- updating




  const [sadhik, setSadhik] = useState(20);

  // let sadhik1 = 202

  // sadhik1 = 1

  /// [variablename, functionname] = useState(initialvalue)


  const name = "sadhik";


  let count = 0;


  console.log(count, 'count')

  function increment() {


    // count++

    count = count + 1

    console.log(count, "count in fun")

  }

  function sadhikincrement() {


    // count = count+ 1

    setSadhik(sadhik + 1)

  }


  function sadhikdecrement() {


    // count = count+ 1

    setSadhik(sadhik - 1)

  }

  function sadhikreset() {

    setSadhik(0)

  }


  return (

    <div>

      {/* html */}

      <div>

        username is {name}


      </div>

      <h1>Count : {count}</h1>



      {/* // don't give function call */}

      {/* 1.method --- don't use the parenthesis */}

      <button onClick={increment}>increment</button>


      <h1>count of sadhik : {sadhik} </h1>

      <button onClick={sadhikincrement}>increment</button>

      <button onClick={sadhikdecrement}>decrement</button>

      <button onClick={sadhikreset}>reset</button>





      {/* // 2.method ---- callback function */}


      {/* <button onClick={() => increment()}>increment</button> */}




      {/* divtag.addeventlister('click', increment ) */}



    </div>

  )

}

export default App;