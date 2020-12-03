import React, {useEffect, useState} from "react"
import NavigationBar from "../NavigationBar/NavigationBar"
import CompanyInfo from "./CompanyDetail/CompanyInfo";
import { useLocation } from "react-router-dom";
import style from "./CompanyPage.module.css"
import StockChart from "./CompanyDetail/StockChart";
import NewsList from "../News/NewsList";

const CompanyPage = (props) => {
    let location = useLocation();
    let data = location.state.info;
    let news = location.state.news;
    let login = location.state.login


    return (
        <div className={style.background}>
            <div className={style.container}>
                <NavigationBar login = {login}/>
                <CompanyInfo info = {data} />
                <StockChart symbol = {data[0].symbol}/>
                <NewsList data = {Object.values(news)}/>
            </div>
        </div>
    )
}

export default CompanyPage
