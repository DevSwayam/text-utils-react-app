import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case" , "success");
  }
  const handleDownClick=()=>{
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted To Lower Case", "success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const[text,setText] = useState('')
  return (<>
  <div className="container " style={{color : props.mode === 'light'?'white':'#042743'}}>
        <h1 style={{color : props.mode === 'light'?'black':'white' }}>{props.heading}</h1>
        <div className="mb-3" style={{color : props.mode === 'light'?'black':'white'}} >
            <textarea className="form-control" style={{backgroundColor : props.mode === 'light'?'white':'#042743' , color : props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
         </div>
         <button className='btn btn-primary mx-2' onClick={handleUpClick}>ToUpperCase</button>
         <button className='btn btn-primary mx-2' onClick={handleDownClick}>ToLowerCase</button>
  </div>
  <div className="container my-4" style={{color : props.mode === 'light'?'black':'white'}}>
    <h1 style={{color : props.mode === 'light'?'black':'white'}}>Your Text Summary is</h1>
    <p style={{color : props.mode === 'light'?'black':'white'}}>Words are = {text.split(" ").length-1} characters are = {text.length} Characters</p>
    <p style={{color : props.mode === 'light'?'black':'white'}}>Minutes required to read the words is {0.008*(text.split(" ").length-1)}</p>
    <h2 style={{color : props.mode === 'light'?'black':'white'}}>Preview</h2>
    <p style={{color : props.mode === 'light'?'black':'white'}}>{text.length>0? text:"Enter Text to preview here"}</p>
  </div>
    </>
  )
}
