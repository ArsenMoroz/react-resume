import { testimonialsData } from "./testimonialsData"
import "./testimonials.scss"

export default function Testimonials() {
    
    return (
        <div className="testimonials" id="testimonials">
            <h1 className="cyber-text">Testimonials</h1>
            <div className="container">
                {testimonialsData.map((d)=>(
                <div className={d.featured ? "card featured" : "card" } key={d.id}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img} alt="" className="user" />
                        <a href={d.url}><img src={d.icon} alt="" className="right"  /></a>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
