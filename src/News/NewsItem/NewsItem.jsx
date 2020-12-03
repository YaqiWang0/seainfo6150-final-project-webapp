import React from "react"
import style from "./NewsItem.module.css"

const NewsItem = (props) => {

    const click = () => {
        window.open(props.data.url, "_blank")
    }
    return (
        <div className={style.container} onClick={click}>
            <img  src={props.data.image} alt={props.data.title} className={style.pic}/>
            <div className={style.contentBlock}>
                <div className={style.titleBlock}>
                    <div className={style.title}>{props.data.title}</div>
                    <div className={style.symbol}>{props.data.symbol}</div>
                </div>
                <div className={style.content}>{props.data.text}</div>
            </div>
        </div>
    )
}

export default NewsItem