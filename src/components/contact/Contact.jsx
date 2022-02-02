import { useState } from "react"
import "./contact.scss"

export default function Contact() {

    const[message,setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/vector-graphics-computer-icons-clip-art-illustration-image-handshake-cartoon.jpg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
    }
