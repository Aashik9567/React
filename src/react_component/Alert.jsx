import React from 'react'

export default function Alert(props) {
   const capitalizeFirstLetter=(word)=>{
      const lower=word.toLowerCase()
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert && 
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     {capitalizeFirstLetter(props.alert.type)}:<strong>{props.alert.msg}</strong>
     </div>}
     </div>
  )
}
