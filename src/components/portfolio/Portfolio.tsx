import React from 'react'
import './portfolio.scss'
import PortfolioList from './PortfolioList'
import { featuredPorfolio, 
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio } from '../dummy/data'

type Prop = {
    id: number;
    title: string;
    img: string;
}

export default function Portfolio() {
    const [selected, setSelected] = React.useState('featured')
    const [ data, setData ] = React.useState([] as Prop[])

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Research"
        },
        {
            id: "content",
            title: "Desktop"
        }
    ]

    React.useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPorfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "content":
                setData(contentPortfolio)
                break;
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                        title={item.title}
                        id={item.id}
                        active={selected === item.id}
                        setSelected={setSelected}
                    />
                    ))}
            </ul>
            
            <div className="container">
                {data.map(item => (
                    <div className="item">
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
