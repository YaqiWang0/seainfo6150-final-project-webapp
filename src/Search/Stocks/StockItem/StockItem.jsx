import React from "react"
import style from "./StockItem.module.css"
import { useHistory, useLocation } from "react-router-dom";

const StockItem = (props) => {
    const randomClass = () => {
        if(props.test === true)
            return "container1"
        let name = "container"
        name = name + `${Math.floor((Math.random() * 6) + 1)}`;
        return name
    }

    let history = useHistory();
    let location = useLocation();

    const openDetail = async (e) => {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${props.stock.symbol}?apikey=56f622a93b55019c5a0875058fc58f13`);
        const responseJson = await response.json();
        const newsResponse = await fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${props.stock.symbol}&limit=10&apikey=56f622a93b55019c5a0875058fc58f13`);
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
        <div className={style[randomClass()]}>
                <div className={style.name} onClick={openDetail}>
                    <span className={style.stock_name}>{props.stock.symbol}</span>
                    <span className={style.company_name}>{props.stock.name}</span>
                </div>
        </div>
    )
}

export default StockItem