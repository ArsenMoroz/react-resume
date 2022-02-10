import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();
    
    useEffect(()=>{
        init(textRef.current, {
            backDelay: 800,
            showCursor: true,
            strings: ["Full Stack Developer", "Software Engineer", "Designer"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/6.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                
                    <h2>
                        <img src="assets/crown.png" alt="" />
                        Hi There, I'm 
                    </h2>
                    
                    <h1>Arsen Moroz</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                    
                </div>
                <a href="#education">
                    <img src="assets/downRed.png" alt="" />
                </a>
            </div>
        </div>
    )
}
