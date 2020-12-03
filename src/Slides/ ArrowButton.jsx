import React from "react"
import style from "./ArrowButton.module.css"

const ArrowButton = (props) => {
    return (
        <a href="#" className={props.isRight === true ? style.arrow_right : style.arrow_left} onClick={props.onClick}></a>
    )
}

export default ArrowButton