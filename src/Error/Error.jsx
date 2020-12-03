import React from 'react'
import style from './NotFoundPage.module.css'

const Error = () => {
    return (
        <div className={style.container}>
            <div className={style.text}>
            404
            </div>
            <div className={style.message}>
                Page Not Found
            </div>
        </div>
    )
}

export default Error
