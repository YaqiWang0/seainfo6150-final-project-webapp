import React from "react"
import style from "./UserProfile.module.css"

const UserProfile = (props) => {
    return (
        <div className={style.container}>
            <div className={style.picBack}>
            <div className={style.pic}/>
            </div>
            <div className={style.username}>{props.username}</div>
        </div>
    )
}

export default UserProfile