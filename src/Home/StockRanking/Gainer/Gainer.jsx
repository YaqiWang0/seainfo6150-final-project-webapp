import React, { useEffect, useState} from "react"
import RankingItem from "../RankingItem";
import style from "../StockRanking.module.css"

const Gainer = (props) => {

    const gainer = []
    for (var i = 0; i < 5; i++) {
        gainer.push(props.data[i])
    }


    return (
        <div  className={style.gainer}>
            <div className={style.title}> Most Gainer Stock Today</div>
            <div className={style.list}>
                {
                    gainer.map((item) => (
                    <div>
                <RankingItem isGainer = {true} stock = {item} key = {item.ticker} login = {props.login}/>

                <hr className={style.line}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gainer