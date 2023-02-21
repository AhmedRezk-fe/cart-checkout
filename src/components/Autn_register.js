import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

const  AuthRegister = () => {


  const [authR,setAuthR] = useState({
    Fname:"",
    Lname:"",
    email:"",
    password:""
  })

  const handelRegister = (e) => {
    setAuthR({
      ...authR,
      [e.target.name]:e.target.value
    })
  }

  const submitRegister = (e) => {
    e.preventDefault();
    console.log("data check register = " , authR)
  }


  return (
    <div className="auth_register">
        <div className="auth_title">
            <h2>Create an account</h2>
        </div>
        <div className="form_auth">            
        <form action="" onSubmit={submitRegister}>
            <Input type="text" name="Fname" label="First name" callBack={handelRegister} />
            <Input type="text" name="Lname" label="last name" callBack={handelRegister} />
            <Input type="email" name="email" label="email" callBack={handelRegister} />
            <Input type="password" name="password" callBack={handelRegister} label="password" />
            <Button val="Sign up" type="submit" />
        </form>
        </div>
    </div>
  )
}

export default AuthRegister