import React, { useState ,useEffect } from 'react'
import Button from './Button'
import Input from './Input'

const  AuthLogin = () => {
  const [authL,setAuthL] = useState({
    email:"",
    password:""
  })

  const handelLogin = (e) => {
    setAuthL({
      ...authL,
      [e.target.name]:e.target.value
    })
  }

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("data check login = " , authL)
  }
  // useEffect(()=>{
  //   console.log("authL = " , authL)
  // },[authL])
  return (
    <div className="auth_login">
        <div className="auth_title">
            <h2>Login</h2>
        </div>
        <div className="form_auth">            
        <form action="" onSubmit={submitLogin}>
            <Input type="email" name="email" label="email" callBack={handelLogin} />
            <Input type="password" name="password" callBack={handelLogin} label="password" />
            <Button val="Sign in" type="submit" />
        </form>
        </div>
    </div>
  )
}

export default AuthLogin