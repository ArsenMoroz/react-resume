import React from 'react'
import "./experience.scss"
import ExperienceTimeline from "../timeline/ExperienceTimeline.js"


export default function resume() {
    return (
            <div className="experience" id="experience">
                <div className="Header">
                <h1 className='cyber-text'>Experience</h1>
                </div>
                
                <div className="container">
                    <ExperienceTimeline/>
                </div>
            </div>
    )
}
