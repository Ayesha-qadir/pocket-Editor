import React, { useState } from 'react'

export default function Form(props) {
    const upClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const capClick = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }
        const clearClick = () => {
            let newText = ('');
            setText(newText)
        }
        
    const handleOnChange =(event)=>{
        setText(event.target.value) 
    }
    const handleCopy=() =>{
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaces =()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
    }

const [text, setText] = useState(' ');
    return (
        <>
            <div className='container' >
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="Textarea1" rows="12"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={upClick}>Upper Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={clearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={capClick}>Capitilixe Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
            </div >
 <div className='container '>
<h3>Your Text Summary</h3>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
 <h2>Preview</h2>
 <p>{text.length>0?text:"Enter your text to preview here:"}</p>
 </div>
 
    </>
)
    }