import React from 'react'

function Alert(props) {
    const Capitalized=(type)=>{
        let lower = type.toLowerCase(); // Convert the whole string to lowercase
        return lower[0].toUpperCase() + lower.slice(1); // Capitalize the first letter and append the rest
    }
  return (
    props.alt && <div className={`alert alert-${props.alt.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalized(props.alt.type)}</strong>:{props.alt.msg} 
  
</div>
  )
}

export default Alert
