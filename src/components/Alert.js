import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{
        const lower =  word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
    <div style={{height:'80px'}}>
    { props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <h3> {capitalize (props.alert.type)}</h3>{props.alert.msg}
       { /* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
  )
}
