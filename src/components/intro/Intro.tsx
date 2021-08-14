import React from 'react'
import './intro.scss'
import { init } from 'ityped'

export default function Intro() {
    const textRef = React.useRef<HTMLSpanElement>(null)

    React.useEffect(() => {
        if (textRef.current !== null) {
            init(textRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ["Developer", "Designer", "Computer Sciences"]
            })
        }
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/khiet.jpg" alt="" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi there</h2>
                    <h1>I'm Thanh Khiết</h1>
                    <h3>Web <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
