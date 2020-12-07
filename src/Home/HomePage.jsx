import React, { useEffect, useState} from "react"
import StockRanking from "./StockRanking/StockRanking";
import NavigationBar from "../NavigationBar/NavigationBar";
import NewsList from "../News/NewsList";
import style from "./HomePage.module.css";
import { useHistory, useLocation } from "react-router-dom";
import Slides from "../Slides/Slides";


const HomePage = (props) => {
    let location = useLocation();

    const [loginCredential,setLoginCredential] = useState({})

    if(location.state !== undefined) {

        if(location.state.login == true) {
            setLoginCredential({
                login: location.state.login,
                userId: location.state.userId,
                email: location.state.email
            })
        } else {
            setLoginCredential({
                login: location.state.login,
                userId: "",
                email: ""
            })
        }
        location.state = undefined
    }

     return (
        <div className={style.background}>
        <div className={style.container}>
            <NavigationBar login = {loginCredential}/>
            <div className={style.picture}>
            <Slides news = {Object.values(props.fetchedData)}/>
            </div>
            <StockRanking gainer = {Object.values(props.gainer)} loser = {Object.values(props.loser)} login = {loginCredential}/>
            <NewsList data = {Object.values(props.fetchedData)} />
        </div>
            </div>
    )
}

export default HomePage