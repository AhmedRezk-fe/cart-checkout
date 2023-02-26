import React from 'react'

const Button = ({classN , callBack , val,type , disabled , children})=> {
  return (
    <div className={`buttonAction ${classN ? classN : ""}`}>
        <button type={type} onClick={callBack} disabled={`${disabled ? "disabled" : ""}`}>{children ? children :val}</button>
    </div>
  )
}

export default Button