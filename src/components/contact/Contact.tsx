import React from 'react'
import './contact.scss'

const Contact = () => {
    const [ message, setMessage ] = React.useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setMessage(!message)
    }

    return (
        <div className="contact" id="contact" >
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>

            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>I'll reply quickly, Thanks for feedback</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
