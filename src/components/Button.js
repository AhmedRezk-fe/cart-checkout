import React from 'react'

const Button = ({classN , callBack , val,type , disabled})=> {
  return (
    <div className={`buttonAction ${classN ? classN : ""}`}>
        <button type={type} onClick={callBack} disabled={`${disabled ? "disabled" : ""}`}>{val}</button>
    </div>
  )
}

export default Button