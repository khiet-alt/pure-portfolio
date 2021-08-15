import './portfolioList.scss'
import React from 'react'

type Prop = {
    title: string;
    id: string;
    active: boolean;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function PortfolioList({title, id, active, setSelected}: Prop) {
    return (
        <li 
            className={active ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(id)} >
            {title}
        </li>
    )
}
