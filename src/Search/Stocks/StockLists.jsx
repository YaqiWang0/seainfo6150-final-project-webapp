import React from "react"
import style from "./StockLists.module.css"
import StockItem from "./StockItem/StockItem";

const StocksList = (props) => {

    return (
        <div className={style.container}>
            {
                props.stocks.map((item) =>(
                    <div>
                        <StockItem login = {props.login} stock = {item} key = {item.ticker}/>
                    </div>
                ))
            }
        </div>
    )
}

export default StocksList