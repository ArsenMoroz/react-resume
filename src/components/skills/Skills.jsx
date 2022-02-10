import { ProgressBar } from 'react-bootstrap';
import {CircleProgress} from 'react-gradient-progress'
import { useState } from "react"
import "./skills.scss"
import {
  tilesData,
  sliderData
} from "./skillsData";

export default function Works() {
    const [currentSlider,setCurrentSlider] = useState(0)

    const handleClick = (way)=>{
        way === "left" 
            ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 1) 
            : setCurrentSlider(currentSlider < sliderData.length -1 ? currentSlider + 1 : 0)
    }

    return (
        <div className="skills" id="skills">
           <div className="Header">
              <h1 className="cyber-text">Skills</h1>
           </div>
           <div className="skillsContainer">
                <div className="container">
                         {tilesData.map((d)=>(
                         
                         <div className="item" key={d.id}>
                             <i 
                                 className= {d.icon} 
                                 alt="" 
                             />
                             <h3>{d.title}</h3>
                         </div>

                         ))}
                     </div>
                </div>
            <div className="slider" 
                style={{transform:`translateX(-${currentSlider * 100}vw)` }}>
                {sliderData.map((d)=>(
                <div className="Container" key={d.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>{d.title}</h2>

                                <div className="meter">
                                       <span style={{ width: d.number }}>
                                         <span className="progress">
                                         </span>
                                       </span>
                                </div>

                                <p>{d.number}{d.desc}
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>

        </div>
    )
}
