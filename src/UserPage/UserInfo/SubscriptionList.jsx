import React, {useState, useEffect}from "react"
import { isEmpty } from "lodash";

import style from "./SubscriptionList.module.css"
import {useHistory} from "react-router-dom";

const SubscriptionList = (props) => {
    const [fetchedData, setFetchedData] = useState({});
    let history = useHistory();
    let sub = ""

    useEffect(() => {
        props.firebase.user(props.login.userId).once('value', async (snapshot) => {
            sub = snapshot.val();

            if(sub != null) {
                let variable = "";
                let i = 0;
                for(let key in sub) {
                    variable = variable + key
                    if(i < Object.keys(sub).length - 1) {
                        variable = variable + ","
                    }
                    i ++;
                }


                const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${variable}?apikey=56f622a93b55019c5a0875058fc58f13`);
                const responseJson = await response.json();
                setFetchedData(responseJson);
            } else if(!isEmpty(fetchedData)){
                setFetchedData([])
            }
        })
    }, [])



    const click = (symbol) => {
        props.firebase.user(props.login.userId).child(symbol).remove();
        props.firebase.user(props.login.userId).once('value', async (snapshot) => {
            sub = snapshot.val();

            if(sub != null) {
                let variable = "";
                let i = 0;
                for(let key in sub) {
                    variable = variable + key
                    if(i < Object.keys(sub).length - 1) {
                        variable = variable + ","
                    }
                    i ++;
                }


                const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${variable}?apikey=56f622a93b55019c5a0875058fc58f13`);
                const responseJson = await response.json();
                setFetchedData(responseJson);
            } else if(!isEmpty(fetchedData)){
                setFetchedData([])
            }
        })
    }

    const viewDetail = async (symbol) => {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=56f622a93b55019c5a0875058fc58f13`);
        const responseJson = await response.json();
        const newsResponse = await fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${symbol}&limit=10&apikey=56f622a93b55019c5a0875058fc58f13`);
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
        <ul className={style.container}>
        {
            Object.values(fetchedData).map((item) => (
                <li key={item.symbol} className={style.textInfo}>
                    <div className={style.title} onClick={() => viewDetail(item.symbol)}>{item.name}</div>
                    <div className={style.sub}>
                        <div className={style.stockPriceBlock}>
                            <div className={item.change >= 0 ? style.price_red : style.price_green}>{`$${item.price}`}</div>
                            <div className={item.change >= 0 ? style.stock_red : style.stock_green}>{item.change >=0 ? `(+ ${item.change})` : `( ${item.change})`}</div>
                        </div>
                        <div onClick={ () => click(item.symbol)} className={style.heartSub}></div>
                    </div>
                </li>
            ), this)
        }
        </ul>
    )
}

export default SubscriptionList