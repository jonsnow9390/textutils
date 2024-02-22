import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handlelwClick = () => {
        let newText = text.toLowerCase();
        setText(newText)


    }

    const handlecpy = () => {
        let text = document.getElementById("myBox");
        text.select();


        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied!","success")
        

    }

    const handleOnChange = (e) => {

        setText(e.target.value)
    }

    const handleSpace = () => {

        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))

    }

    const handleclr = () =>{
         setText("")

    }

    const [text, setText] = useState("");
    //setText("new text")
    return (

        <>
            <div className="conatiner" style={{Color: (props.mode==="dark"?"white":"black") }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control my-100" style={{ backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black" }} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to uppercase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handlelwClick}>Convert to lowercase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handlecpy}>Copy text</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleSpace}>Remove extra spaces</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleclr}>Clear Text</button>


                </div>

            </div>
            <div className="conatiner" style={{color: props.mode==="dark"?"white":"black"}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    )
}
