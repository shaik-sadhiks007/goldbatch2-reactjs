import { useEffect, useState } from "react"
import Login from "./Login"

function Overview() {

    // js 

    // const [variablename, updatefunname] = useState(initial value)



    const [name, setName] = useState('sadhik')

    function changeName() {
        setName("hemanth")
    }

    // api calls --- how many time u have to call

    // ---- is there any particular change we have to call

    // useEffect(

    //     // syntax

    //     // call back fun (a fun calling another fun), dependency (on which it is depending)



    // )

    return (

        // html
        <div>
            <h1>Login page</h1>

            {
                name
            }

            <button onClick={() => changeName()}>change name </button>

            <Login username={'sadhik'} />

        </div>
    )

}

export default Overview

