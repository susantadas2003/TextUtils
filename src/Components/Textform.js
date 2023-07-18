import React,{useState} from 'react'


export default function Textform(props) {

  

const handleUpClick=()=>{

    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase successfully","success")

}
const handleLowClick=()=>{

  let newText =text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase successfully","success")

}
const handleCleartextClick=()=>{

  let newText ="";
  setText(newText);
  props.showAlert("Text cleared successfully","success")

}
const handleCopy=()=> {
var text = document.getElementById("myBox");
text.select();
 navigator.clipboard.writeText(text.value);
 document.getSelection().removeAllRanges();
 props.showAlert("Text copied to Clipboard","success")
}
const handleExtraSpaces = () => { 
  let newText = text.split (/[ ]+/);
setText(newText.join(" "));
props.showAlert("Extra spaces removed","success")
}

const handleOnChange=(event)=>{

    setText(event.target.value);

}
    const[text,setText]=useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >

      <br />
        <h1 className ="mb-4">{props.heading}</h1>
        <div class="mb-3">
      <textarea class="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}id="myBox" rows="8"></textarea>
    </div>
    <button type="submit" disabled={text.length===0} onClick={handleUpClick}class="btn btn-primary mx-2 my-2">Convert to Upper Case</button>

    <button type="submit"disabled={text.length===0} onClick={handleLowClick}class="btn btn-primary mx-2 my-2">Convert to Lower Case</button>
    <button type="submit"disabled={text.length===0} onClick={handleCleartextClick}class="btn btn-primary mx- my-2">Clear Text</button>
    <button type="submit"disabled={text.length===0} onClick={handleCopy }class="btn btn-primary mx-2 my-2">Copy Text</button>
    <button type="submit"disabled={text.length===0} onClick={handleExtraSpaces }class="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
     </div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters </p>
  <p>{0.008* text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length>0?text:"Nothing to preview"}</p>
</div>
</>
  )
}
