import React from "react"
import NewsItem from "./NewsItem/NewsItem";
import style from "./NewsList.module.css"
import { isEmpty } from "lodash";

const NewsList = (props) => {
    const news = []
    for (var i = 0; i < 5; i++) {
        if(props.data[i] === undefined)
            continue;
       news.push(props.data[i]);
    }
    return isEmpty(news) ? null : (
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