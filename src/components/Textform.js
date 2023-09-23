import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const readMinute = () =>
    {
        let a = 0.008 * text.split(" ").length
        return a.toFixed(2);

    }
    const handlelowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleCapClick = () => {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newText = arr.join(" ");
        setText(newText)
    }
    const handleTogClick = () => {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].toUpperCase().slice(1);
        }
        const newText = arr.join(" ");
        setText(newText)
    }
    
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
    }
    const handleCopyClick = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handlePasteClick = async () => {
        try {
            let text1 = await navigator.clipboard.readText();
            setText(text1);
        } catch (error) {
            console.error('Error reading clipboard:', error);
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    return (
        <>
 
            <div className='container'>
                <h3 className={`text-${props.moded==='light'?'dark':'light'}`}>{props.heading}</h3>
                <div className="form-group mx-10">
                    <textarea className="form-control" value={text} placeholder='Enter your text here: ' onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="btnss my-3 ">
                    <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handlelowClick}>Lowercase</button>
                    <button className="btn btn-primary mx-1 " onClick={handleCapClick}>Capatalize</button>
                    <button className="btn btn-primary mx-1" onClick={handleTogClick}>Toggle</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
                    <button className="btn btn-primary mx-1" onClick={handlePasteClick}>Paste</button>

                </div>
            </div>
            <div className={`container my-3 text-${props.moded==='light'?'dark':'light'}`}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>

                <p> {readMinute()} Reading Minutes</p>

            </div>
        </>
    )
}
