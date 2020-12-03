import React from "react"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import style from "./StockChart.module.css"

const StockChart = (props) => {
    let curSymbol = `NASDAQ:${props.symbol}`;
    return (
        <div className={style.container}>
        <TradingViewWidget
            symbol= {curSymbol}
            theme={Themes.DARK}
            autosize
        />
        </div>
    )
}

export default StockChart