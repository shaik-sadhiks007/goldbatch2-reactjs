import React from 'react'

function Login({username}) {


  return (
    <div>
      <input type="text" value={username} placeholder='enter the username' />
      <input type="text" placeholder='enter the password' />

      <button>submit</button>

    </div>
  )
}

export default Login
