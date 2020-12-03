import React, { useEffect, useState} from "react"
import { useHistory, useLocation } from "react-router-dom";
import style from "./StockRanking.module.css"

const RankingItem = (props) => {
    // TODO: semetic html
    let history = useHistory();
    const openDetail = async (e) => {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${props.stock.ticker}?apikey=56f622a93b55019c5a0875058fc58f13`);
        const responseJson = await response.json();
        const newsResponse = await fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${props.stock.ticker}&limit=10&apikey=56f622a93b55019c5a0875058fc58f13`);
        const newsResponseJson = await newsResponse.json();
        history.push(
            "/company",
            {
                info: Object.values(responseJson),
                news: newsResponseJson,
                login: props.login
            }
        )
    }

    return (
    <div className={style.ranking_item} onClick={openDetail}>
        <div className={style.name}>
            <span className={style.stock_name}>{props.stock.ticker}</span>
            <span className={style.company_name}>{props.stock.companyName}</span>
        </div>
        <span className={props.isGainer ? style.gainer_price_text : style.loser_price_text}>{`$${props.stock.price}`}</span>
    </div>
    );
}

export default RankingItem