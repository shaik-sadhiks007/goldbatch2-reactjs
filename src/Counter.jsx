import { useState } from "react";

function Counter() {


    const [sadhik, setSadhik] = useState(20);

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

            <h1>count of sadhik : {sadhik} </h1>

            <button onClick={sadhikincrement}>increment</button>

            <button onClick={sadhikdecrement}>decrement</button>

            <button onClick={sadhikreset}>reset</button>


        </div>


    )
}

export default Counter;