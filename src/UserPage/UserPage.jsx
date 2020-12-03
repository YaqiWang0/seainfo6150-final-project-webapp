import React from "react"
import { useLocation } from "react-router-dom";
import style from "./UserPage.module.css"
import UserProfile from "./UserInfo/UserProfile";
import NavigationBar from "../NavigationBar/NavigationBar";
import SubscriptionList from "./UserInfo/SubscriptionList";

const UserPage = (props) => {
    let location = useLocation();
    let login = location.state.login;
    let subscription = ["AAPL", "FB", "GOOG"]


    return (
        <div className={style.background}>
            <div className={style.container}>
                <NavigationBar login = {login}/>
                <UserProfile username = {login.username} />
                <SubscriptionList sub={subscription} login = {login}/>
            </div>
        </div>
    )
}

export default UserPage