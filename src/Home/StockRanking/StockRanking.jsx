import React, { useEffect, useState} from "react"
import Gainer from "./Gainer/Gainer";
import Loser from "./Loser/Loser";
import style from "./StockRanking.module.css"

const StockRanking = (props) => {
    return (
        <div className={style.ranking_container}>
            <Gainer data={Object.values(props.gainer)} login = {props.login}/>
            <Loser data={Object.values(props.loser)} login = {props.login}/>
        </div>
    )
}

export default StockRanking