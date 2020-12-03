import React from "react"
import NewsItem from "./NewsItem/NewsItem";
import style from "./NewsList.module.css"

const NewsList = (props) => {
    const news = []
    for (var i = 5; i < 10; i++) {
       news.push(props.data[i])
    }
    return (
        <div className={style.container}>
            {
                news.map((item) =>(
                    <div>
                    <hr className={style.line}/>
                    <NewsItem data = {item} key = {item.title}/>

                    </div>
                ))
            }
        </div>
    )
}

export default NewsList