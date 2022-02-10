import React from 'react'
import "./education.scss"
import EducationTimeline from "../timeline/EducationTimeline.js"


export default function resume() {
    return (
            <div className="education" id="education">
                <div className="Header">
                    <h1 className='cyber-text'>Education</h1>
                </div>
                
                <div className="container">
                    <EducationTimeline/>
                </div>
            </div>
    )
}
