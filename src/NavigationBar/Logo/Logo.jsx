import React from "react"
import { useHistory, useLocation } from "react-router-dom";
import style from "./Logo.module.css"

const Logo = (props) => {
    let history = useHistory();

    const click = () => {
        history.push(
            "/",
            {
                login: props.login,
                userId: props.credential.userId,
                email : props.credential.email
            }
        )
    }

    return (
        <div className={style.container} onClick={click}>
        <div className={style.pic}>
        </div>
        </div>
    )
}

export default Logo