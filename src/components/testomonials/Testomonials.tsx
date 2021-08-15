import React from 'react'
import './testomonial.scss'

export default function Testomonials() {
    const data = [
        {
            featured: false,
            id: 1,
            icon: 'assets/mobile.png',
            name: "Kiều My",
            title: "my wife",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vero maxime mollitia unde quia odit. Expedita nam repellat moll',
            img: "https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg"
        },
        {
            featured: true,
            id: 2,
            icon: 'assets/globe.png',
            name: "Thanh Khiết",
            title: "CEO of MAPDEN",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vero maxime mollitia unde quia odit. Expedita nam repellat moll',
            img: "https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60ddc1a2085d2983a0be88fa_poster-toi-da-lo-yeu-muc-tieu-truy-sat-cua-minh.jpg"
        },
        {
            featured: false,
            id: 3,
            icon: 'assets/writing.png',
            name: "Thanh Tùng",
            title: "my brother",
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vero maxime mollitia unde quia odit. Expedita nam repellat moll',
            img: "https://www.fullphimz.net/static/5fe2d564b3fa6403ffa11d1c/60d96d5835f810953887a808_poster-meo-hay-cau-nguyen.jpg"
        }
    ]

    return (
        <div className="testomonials" id="testomonials">
            <h1>Testomonials</h1>

            <div className="container">
                { data.map(item => (
                    <div className={item.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img className="left" src="assets/right-arrow.png" alt="" />
                            <img className="user" src={item.img} alt="" />
                            <img className="right" src={item.icon} alt="" />
                        </div>

                        <div className="center">
                            {item.description}
                        </div>

                        <div className="bottom">
                            <h3>{item.name}</h3>
                            <h4>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
