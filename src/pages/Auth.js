import React from 'react'
import AuthLogin from '../components/Auth_login'
import AuthRegister from '../components/Autn_register'

const  Auth = () =>{
  return (
    <div className="auth">
        <div className="container">
            <div className="auth_grid">
                <AuthLogin />
                <AuthRegister />
            </div>
        </div>
    </div>
  )
}

export default Auth