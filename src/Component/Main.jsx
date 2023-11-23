import React from 'react'
import './Main.css'
import { useState } from 'react'

const Main = () => {
    const[flag, setflag] = useState(true)
    
    const text =()=>{
        let h1 = document.querySelector("h1")
        if(flag == true){
            h1.innerText = "Hello World"
            setflag(!flag)
        } else {
            h1.innerText = ""
            setflag(!flag)
        }
    }

    const warn =()=>{
        alert("Xeberdarliq!")
    }
    
    const hidden = () =>{
        let p = document.querySelector("p")
        p.style.display = "block"
    }

    const leave = () =>{
        let p = document.querySelector("p")
        p.style.display = "none"
    }

    
    return (
        <div className='main'>
            <button onClick={text}>text</button>
            <button onClick={warn} className='warn'>WarnMessage</button>
            <button onMouseOver={hidden} onMouseLeave={leave} className='hint'>hint</button>
            <p className='text'><i>Hello</i></p>
            <h1></h1>
        </div>
    )
}

export default Main
