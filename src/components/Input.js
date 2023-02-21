import React from 'react'

const  Input = ({type,label ,name, placeholder,callBack ,classN}) =>  {
  return (
    <div className={`form_group ${classN ? classN :""}`}>
        {
            label && <label htmlFor={name}>{label}</label>
        }
        
        <input type={type} name={name} placeholder={placeholder} id={name} onChange={callBack}/>
    </div>
  )
}

export default Input