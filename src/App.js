import style from './App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import { FirebaseContext } from './Firebase';

import HomePage from "./Home/HomePage";
import SearchPage from "./Search/SearchPage";
import CompanyPage from "./CompanyPage/CompanyPage";
import LoginPage from "./LoginAndSignUp/LoginPage";
import UserPage from "./UserPage/UserPage";
import Error from "./Error/Error"



function App() {

    const [fetchedData, setFetchedData] = useState({});
    const [gainer, setGainer] = useState({});
    const [loser, setLoser] = useState({});

    useEffect(() => {
        const gain = async () => {
            const response = await fetch("https://financialmodelingprep.com/api/v3/gainers?apikey=56f622a93b55019c5a0875058fc58f13");
            const responseJson = await response.json();
            setGainer(responseJson);
        };

        const lose = async () => {
            const response = await fetch("https://financialmodelingprep.com/api/v3/losers?apikey=56f622a93b55019c5a0875058fc58f13");
            const responseJson = await response.json();
            setLoser(responseJson);
        }

        const fetchData = async () => {
            // performs a GET request
            const response = await fetch("https://financialmodelingprep.com/api/v3/stock_news?limit=10&apikey=56f622a93b55019c5a0875058fc58f13");
            const responseJson = await response.json();
            setFetchedData(responseJson);
        };

        if (isEmpty(fetchedData)) {
            fetchData();
        }

        if (isEmpty(gainer)) {
            gain()
        }
        if (isEmpty(loser)) {
            lose()
        }

    }, [gainer, loser, fetchedData]);

    return (isEmpty(fetchedData) || isEmpty(gainer) || isEmpty(loser)) ? null : (
        <div className={style.App}>
            <Switch>

                <Route path="/search">
                    <SearchPage />
                </Route>
                <Route path="/company">
                    <CompanyPage />
                </Route>
                <Route path="/login_sign_up">
                    <FirebaseContext.Consumer>
                        {firebase =>
                            <LoginPage firebase = {firebase}/>
                        }
                    </FirebaseContext.Consumer>
                </Route>
                <Route path="/user">
                    <UserPage />
                </Route>
                <Route path="/error" component={Error} />
                <Route path="/seainfo6150-final-project-webapp/">
                    <HomePage fetchedData = {fetchedData} gainer = {gainer} loser = {loser}/>
                </Route>
                <Route path="/seainfo6150-final-project-webapp/*" component={Error} exact/>
                <Route path="/">
                    <HomePage fetchedData = {fetchedData} gainer = {gainer} loser = {loser}/>
                </Route>


            </Switch>
        </div>
    );
}

export default App;
