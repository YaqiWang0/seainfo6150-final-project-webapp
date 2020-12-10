import React from 'react'
import {Link} from "react-router-dom"
import style from './NotFoundPage.module.css'

const Error = () => {
    return (
        <div className={style.container}>
            <div className={style.picBlock}>
                <div className={style.pic}></div>
            </div>
            <div className={style.textContainer}>
                <div className={style.textBlock}>
                    <div className={style.text}>
                        404
                    </div>
                    <div className={style.message}>
                        Page Not Found
                    </div>
                    <div className={style.content}>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</div>
                    <button className={style.btn}><Link to="/">HOME</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Error
