import React from 'react'
import './work.scss'

export default function Works() {
    const data = [
        {
            id: 1,
            icon: 'assets/mobile.png',
            title: "Mobile",
            description: "lorem isumLorem isum Lorem isum Lorem isum ",
            img: "https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"
        },
        {
            id: 2,
            icon: 'assets/globe.png',
            title: "Globe",
            description: "lorem isumLorem isum Lorem isum Lorem isum ",
            img: "https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60ddc1a2085d2983a0be88fa_poster-toi-da-lo-yeu-muc-tieu-truy-sat-cua-minh.jpg"
        },
        {
            id: 3,
            icon: 'assets/writing.png',
            title: "Writing",
            description: "lorem isumLorem isum Lorem isum Lorem isum ",
            img: "https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60d96d5835f810953887a808_poster-meo-hay-cau-nguyen.jpg"
        }
    ]

    const [ currentSlide, setCurrentSlide ] = React.useState(0)


    const handleSlide = (direct?: string) => {
        direct === 'left'
            ?   setCurrentSlide((currentSlide > 0 && currentSlide < data.length) ? currentSlide - 1 : data.length - 1)
            :   setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw` }}>
                { data.map(item => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <span>Projects</span>
                                </div>
                            </div>

                            <div className="right">
                                <img src="assets/web-design.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleSlide('left')} />
            <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => handleSlide()}/>            
        </div>
    )
}
