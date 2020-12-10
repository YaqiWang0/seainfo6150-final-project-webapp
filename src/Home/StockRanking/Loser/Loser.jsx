import React, { useEffect, useState} from "react"
import RankingItem from "../RankingItem";
import style from "../StockRanking.module.css"

const Loser = (props) => {

    const loser = []
    for (var i = 0; i < 5; i++) {
        loser.push(props.data[i])
    }
    return (
        <div  className={style.loser}>
            <div className={style.title}> Most Loser Stock Today</div>
            <div className={style.list}>
            {loser.map((item) => (
                <div>
                <RankingItem isGainer = {false} stock = {item} key = {item.ticker} login = {props.login}/>
                <hr className={style.line}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Loser