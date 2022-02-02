import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div> {/* Create a new component to avoid code dupplication in the ul*/}
            <div className={"menu " + (menuOpen && "active")}>
                <ul> 
                    <li onClick ={()=> setMenuOpen(false)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick ={()=> setMenuOpen(false)}>
                        <a href="#education">Education</a>
                    </li>
                    <li onClick ={()=> setMenuOpen(false)}>
                        <a href="#experience">Experience</a>
                    </li>
                    <li onClick ={()=> setMenuOpen(false)}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick ={()=> setMenuOpen(false)}>
                        <a href="#works">Works</a>
                    </li>
                    <li onClick ={()=> setMenuOpen(false)}>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li onClick ={()=> setMenuOpen(false)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div> 
        </div>
    )
}