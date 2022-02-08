import React from 'react'
import "./experience.scss"
import TimeLine from "../timeline/TimeLine.js"


export default function resume() {
    return (
            <div className="experience" id="experience">
                <div className="Header">
                <h1 className='cyber-text'>Experience</h1>
                </div>
                
                <div className="container">
                    <TimeLine/>
                </div>
            </div>
    )
}
