import React from 'react'
import "./resume.scss"
import TimeLine from "../timeline/TimeLine.js"
import TimeLineEd from "../timeline/TimeLineEd.js"


export default function resume() {

    const data1 = [
        {
            title: "Computer Lab Assistant",
            years: "November 2016 to June 2017",
            desc: "In this academy I was responsible for maintenance of the company’s personal software and hardware."
        },
        {
            title: "Full Stack Developer",
            years: "August 2017 to July 2018",
            desc: "In this company I was responsible for full-stack development, improvement and maintenance of company’s software (optimized software in the way that increased the speed on 40% and the revenue of the company on 30%)"
        }
    ]


    const data2 = [
        {
            title: "Honors Bachelor of Technology – Software Development",
            instit: "Seneca College, Toronto, ON",
            years: "Sep 2018 – Present"
        },
        {
            title: "Diploma – Full Stack Development",
            instit: "Step Academy, Ukraine",
            years: "Sep 2016 – Sep 2017"
        }
    ]

    return (
            <div className="resume" id="resume">
                <div className="left">
                        <TimeLineEd className="sideL"/>
                </div>
                <div className="right">
                        <TimeLine className="sideR"/>
                </div>
            </div>
    )
}
