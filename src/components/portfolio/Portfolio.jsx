import {useEffect, useState} from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio
} from "./portfolioData";

export default function Portfolio() {

    const [selected,setSelected]= useState("featured")
    const [data,setData]= useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
    ]

    useEffect(()=> {
        switch (selected){
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            default:
                console.log("ERROR");
        }
    },[selected])
    
    return (
        <div className="portfolio" id="portfolio">
            <h1 className="cyber-text">Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList 
                        key={item.id}
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id = {item.id} 
                    />
                ))}
            </ul>
                <div className="container">
                    {data.map((d)=>(
                    
                    <a href={d.link} target="_blank" rel="noreferrer"> 
                        <div className="item" key={d.id}>

                            <img 
                                src= {d.img} 
                                alt="" 
                            />

                            <h3>{d.title}</h3>
                        </div>
                    </a>

                    ))}
                </div>
        </div>
    )

}