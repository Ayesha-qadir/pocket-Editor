import React, { useState } from 'react'

export default function About() {

  const [myStyle, setMyStyle]=useState({
    color:"black",
    backgroundColor:"white"
}) 
const [btnText, setBtnText]= useState('Enable Dark mode')

const toggleStle =()=>{
    if(myStyle.color ==='black'){
    setMyStyle({
    color:"white",
    backgroundColor:"black"
})
setBtnText('Enable light Mode')
}
else{
        setMyStyle({
        color:"black",
        backgroundColor:"white"
    })
    setBtnText('Enable dark Mode')
    }
        }

  return (
    <div className='container' style={myStyle}>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Save Money
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Free to use .</strong> Open-source and royalty-free content is often free or very affordable, which can save you a lot of money on your marketing and design costs.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        East to tackle
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Easy to use .</strong> Simple and straightforward. Easy to learn and use.

      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Responsive Layout
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Responsive on all Devices.</strong> Responsive design can help you reduce development costs by eliminating the need to create separate mobile and desktop versions of your website or web app.
        </div>
    </div>
  </div>

</div>
<button className='btn btn-primary mt-4'onClick={toggleStle} >{btnText}</button>
    </div>
  )
}
