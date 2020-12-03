import React, { useEffect, useState} from "react"
import  style from "./UserButton.module.css"

const UserButton = (props) => {
    return (

            <nav>
                <ul>
                    <li onClick={props.onClick}>
                        {props.text}
                        <span></span><span></span><span></span><span></span>
                    </li>
                </ul>
            </nav>
    )
}

export default UserButton