import React, {useState, useEffect}from "react"
import { isEmpty } from "lodash";

import style from "./SubscriptionList.module.css"
import {useHistory} from "react-router-dom";

const SubscriptionList = (props) => {
    const [fetchedData, setFetchedData] = useState({});
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {

            let variable = "";
            for(var i = 0; i < props.sub.length - 1; i++) {
                variable = variable + props.sub[i] + ","
            }
            variable = variable + props.sub[props.sub.length - 1];

            const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${variable}?apikey=56f622a93b55019c5a0875058fc58f13`);
            const responseJson = await response.json();
            setFetchedData(responseJson);
        };
        if(isEmpty(fetchedData)) {
            fetchData()
        }
    }, [fetchedData]);

    const click = (index) => {
        // let subs = [...subscribe];
        // let item = {...subs[index]};
        // item.isSubscribed = !item.isSubscribed;
        // subs[index] = item;
        // setSubscribe(subs);
        // console.log(subscribe[`${index}`])
        setFetchedData(fetchedData.filter((e, i) => i !== index))
    }

    const viewDetail = async (index) => {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${props.sub[index]}?apikey=56f622a93b55019c5a0875058fc58f13`);
        const responseJson = await response.json();
        const newsResponse = await fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${props.sub[index]}&limit=10&apikey=56f622a93b55019c5a0875058fc58f13`);
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
            Object.values(fetchedData).map((item, index) => (
                <li key={index} className={style.textInfo}>
                    <div className={style.title} onClick={() => viewDetail(index)}>{item.name}</div>
                    <div className={style.sub}>
                        <div className={style.stockPriceBlock}>
                            <div className={item.change >= 0 ? style.price_red : style.price_green}>{`$${item.price}`}</div>
                            <div className={item.change >= 0 ? style.stock_red : style.stock_green}>{item.change >=0 ? `(+ ${item.change})` : `( ${item.change})`}</div>
                        </div>
                        <div onClick={ () => click(index)} className={style.heartSub}></div>
                    </div>
                </li>
            ), this)
        }
        </ul>
    )
}

export default SubscriptionList