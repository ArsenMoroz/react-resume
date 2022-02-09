import { ProgressBar } from 'react-bootstrap';
import {CircleProgress} from 'react-gradient-progress'
import { useState } from "react"
import "./skills.scss"

export default function Works() {
    const [currentSlider,setCurrentSlider] = useState(0)
    const data = [
        {
          id: "1",
          number: "60%",
          title: "MERN Stack",
          desc:
            " of all full-stack projects are made with MERN stack which is one of TOP 3 stacks for 2022. ",
          img:
            "./assets/MERn1111.png",
        },
        {
          id: "2",
          number: "20%",
          title: "MEAN Stack",
          desc:
            " of all full-stack projects are made with MEAN stack which is one of TOP 3 stacks for 2022.",
          img:
            "./assets/Meannn.png",
        }
        
        /*{
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },*/
      ];

    const dataOne = [
      {
        id: "1",
        icon: "devicon-react-original",
        title: "React"
      },
      {
        id: "2",
        icon: "devicon-angularjs-plain",
        title: "Angular"
      },
      {
        id: "3",
        icon: "devicon-redux-original",
        title: "Redux"
      },
      {
        id: "4",
        icon: "devicon-javascript-plain",
        title: "JavaScript"
      },
      {
        id: "5",
        icon: "devicon-html5-plain",
        title: "HTML5"
      },
      {
        id: "6",
        icon: "devicon-css3-plain",
        title: "CSS3"
      },
      {
        id: "7",
        icon: "devicon-mongodb-plain",
        title: "MongoDB"
      },
      {
        id: "8",
        icon: "devicon-sass-original",
        title: "Sass"
      },
      {
        id: "9",
        icon: "devicon-bootstrap-plain",
        title: "Bootstrap"
      },
      {
        id: "10",
        icon: "devicon-mysql-plain",
        title: "MySQL"
      },

    ]

    const handleClick = (way)=>{
        way === "left" 
            ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 1) 
            : setCurrentSlider(currentSlider < data.length -1 ? currentSlider + 1 : 0)
    }

    return (
        <div className="skills" id="skills">
           <div className="Header">
              <h1 className="cyber-text">Skills</h1>
           </div>
           <div className="skillsContainer">
                <div className="container">
                         {dataOne.map((d)=>(
                         
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
                {data.map((d)=>(
                <div className="Container" key={d.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>{d.title}</h2>
                                {/*<CircleProgress percentage={60} strokeWidth={8} width={140}/>*/}
                                {/*<div id="progressbar">
                                  <div></div>
                              </div>*/}

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
