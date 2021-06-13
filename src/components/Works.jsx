import React from 'react'
import Work from './Work'
import items from "./data/works_data"


const Works = () => {
    return (
        <>
            <h2 className="major">Work</h2>
            {items.map((item, index) => {
                console.log(item)
                return <Work title={item.title} text={item.text} img={item.img} skills={item.skills} link={item.link} key={index.toString()} />
            })}

        </>
    )
}

export default Works;