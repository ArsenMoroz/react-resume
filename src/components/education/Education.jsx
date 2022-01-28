import React from 'react'
import "./education.scss"
import TimeLineEd from "../timeline/TimeLineEd.js"


export default function resume() {
    return (
            <div className="education" id="education">
                <h1 className='cyber-text'>Education</h1>
                <div className="container">
                    <TimeLineEd/>
                </div>
            </div>
    )
}
