import React, { useState } from "react";
export default function Text_form(props) {
  let mystyle={
    margin: 4 ,borderRadius:'10px'
  }
  const uppercase = () => {
    //console.log("uppercase invoked...");
    let newtext=text.toUpperCase();
    settext(newtext)
    props.setalert("converted to uppercase","success")
  };
  const copytext=()=>{
    navigator.clipboard.writeText(text)
  }
  const lowercase = () => {
    //console.log("lowercase invoked...");
    let newtext=text.toLowerCase();
    settext(newtext)
    props.setalert("converted to lowercase","success")
  };
  const RemSpCharacter =()=>{
    const specialchar=/[^a-zA-Z0-9]/g;
    const newtext=text.replace(specialchar,'')
    settext(newtext)
    props.setalert("special character removed only alphabets and number are present","success")
  };

  const textchanged = (event) => {
    //console.log("text changed");
    settext(event.target.value)
  };
  const cleartext = ()=>{
    const newtext='';
    settext(newtext)
  }
  const CapFirstAlpha=()=>{
    const words=text.split(" ");
    let newword=words.map(a=>a.charAt(0).toUpperCase() + a.slice(1));
    let newtext=newword.join(" ");
    settext(newtext)
  }
  const [text, settext] = useState('');
  //text="new text"; we cant change value like this
  //settext("new value of text"); correct way to change text
  return (
    <>
    <div style={{color:props.mode==='light' ?'black':'white'}}>
      <div className="mb-3" >
        <label htmlFor="box" className="form-label">
          <h2>{props.message}</h2>
        </label>
        <br />
        <button type="button" className="btn btn-secondary" onClick={copytext} style={mystyle}>
        <h6 className="fa-solid fa-copy ">copy text</h6>
        </button>
        <textarea
          style={{backgroundColor:props.mode ==='light' ?'#FFB38A':'rgb(15, 29, 46)',color:props.mode==='light' ?'black':'white'}}
          value={text}
          onChange={textchanged}
          className="form-control my-3"
          id="box"
          rows="10"
        ></textarea>
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          onClick={uppercase}
          className="btn btn-danger"
          style={mystyle}
        >
          Convert to Uppercase
        </button>
        <button type="button" className="btn btn-warning" onClick={lowercase} style={mystyle}>
          Convert to Lowercase
        </button>
        <button type="button" className="btn btn-secondary" onClick={RemSpCharacter} style={mystyle}>
          Remove special Character
        </button>
        <button type="button" className="btn btn-warning" onClick={cleartext} style={mystyle}>
          Clear Text
        </button>
        <button type="button" className="btn btn-success" onClick={CapFirstAlpha} style={mystyle}>
          Capitalize First Alphabet Of Each Word 
        </button>
       
      </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='light' ?'rgb(15, 29, 46)':'white'}}>
      <h2>Total no of words</h2>
      <p>total characters {text.length} and words count is {text.split("/\s+/").filter((element)=>{ return element.length!==0}).length}</p>
      <h5>Average time taken to read : {0.008*text.split(" ").length} minutes</h5>
      <p>preveiw:</p>
      <span>{text}</span>
    </div>
    </>
  );
}
Text_form.defaultProps = {
  message: "Enter your Text below you want:",
};
