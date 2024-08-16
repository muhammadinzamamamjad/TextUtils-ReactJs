import React, { useState } from 'react'

export default function TextForm(props) {
    const[text,settext]=useState('')
    const upclickhandler=()=>{
        settext(text.toUpperCase())
    }
    const loclickhandler=()=>{
        settext(text.toLowerCase())
    }
    const clclickhandler=()=>{
        settext('')
    }
    const changehandler=(event)=>{
        settext(event.target.value)
    }
    const countWords = (text) => {
        // Split text by any number of spaces, and filter out empty strings
        const words = text.trim().split(/\s+/);
        return words.length > 0 && words[0] !== '' ? words.length : 0;
      };
    const speakclickhandler = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
      }
  return (
    <div>
    <div className="mb-3">
  <h1 style={{  color:props.mod==='dark'?'white':'black'}}>{props.textarea}</h1>
  <textarea className="form-control" style={{ background: props.mod==='dark'?'grey':'white', color:props.mod==='dark'?'white':'black'}}  placeholder="Enter Your Message" value={text} onChange={changehandler} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className=" btn btn-primary my-3 mx-3" onClick={upclickhandler}>Convert To UpperCase</button>
  <button className=" btn btn-primary my-3" onClick={loclickhandler}>Convert To LowerCase</button>
  <button className=" btn btn-primary my-3 mx-3" onClick={speakclickhandler} id="toggle">Speak</button>
  <button className=" btn btn-danger my-3 mx-3" onClick={clclickhandler}>ClearAllText</button>

</div>
    <div style={{color:props.mod==='dark'?'white':'black'}}  className="container">
        <h2>Text Summary is Here</h2>
        <p>Your Text Contains {countWords(text)} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Text to Preview"}</p>
    </div>
    </div>
  )
}
