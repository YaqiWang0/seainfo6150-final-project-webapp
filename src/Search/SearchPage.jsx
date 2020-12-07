import React, { useEffect, useState} from "react"
import NavigationBar from "../NavigationBar/NavigationBar";
import { useLocation } from "react-router-dom";
import style from "./SearchPage.module.css";
import StocksList from "./Stocks/StockLists";


const SearchPage = (props) => {
    let location = useLocation();
   let searchText = `${location.state.data}`;
    const [fetchedData, setFetchedData] = useState({});
    const [login, setLogin] = useState({
                                                   login: location.state.login,
                                                    email: location.state.credential.email,
                                                    userId: location.state.credential.userId
                                                  });

    useEffect(() => {
        const fetchData = async () => {
            // performs a GET request
            const response = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${searchText}&limit=10&exchange=NASDAQ&apikey=56f622a93b55019c5a0875058fc58f13`);
            const responseJson = await response.json();
            setFetchedData(responseJson);
            setLogin({
                login: location.state.login,
                email: location.state.credential.email,
                userId: location.state.credential.userId
            });
        };
            fetchData();
    }, [location.state.data]);

    return (
        <div className={style.background}>
            <div className={style.container}>
                <NavigationBar login = {login}/>
                <div className={style.searchTextBlock}>
                    <div className={style.searchTextTitle}>Search text:</div>
                    <div className={style.searchText}>{`"${searchText}"`}</div>
                </div>
                <StocksList login = {login} stocks = {Object.values(fetchedData)}/>
            </div>
        </div>
    )
}

export default SearchPage