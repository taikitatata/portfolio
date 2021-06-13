import React from 'react'

const Work = (props) => {
    console.log(props.link)
    const initLink = props.link === "";
    const linkClassName = initLink ? "noLink" : "link";

    return (
        <div className="work__cont">
            <div className="work__title__wrap">
                <h2 className="work__title">{props.title}</h2>
                <p className={linkClassName}><a href={props.link}>サイトへ</a> </p>
            </div>
            <p className="work__img"><img src={props.img} alt="" /></p>
            <p className="work__text">{props.text}</p>
            <p className="work__text work__skill">( {props.skills} )</p>
        </div>
    )
}

export default Work;