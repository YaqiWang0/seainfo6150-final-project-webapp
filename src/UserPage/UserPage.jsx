import React from "react"
import { useLocation } from "react-router-dom";
import style from "./UserPage.module.css"
import UserProfile from "./UserInfo/UserProfile";
import NavigationBar from "../NavigationBar/NavigationBar";
import SubscriptionList from "./UserInfo/SubscriptionList";
import {FirebaseContext} from "../Firebase";
import CompanyInfo from "../CompanyPage/CompanyDetail/CompanyInfo";

const UserPage = (props) => {
    let location = useLocation();
    let login = location.state.login;
    let subscription = ["AAPL", "FB", "GOOG"]


    return (
        <div className={style.background}>
            <div className={style.container}>
                <NavigationBar login = {login}/>
                <UserProfile email = {login.email} userId = {login.userId} />
                <FirebaseContext.Consumer>
                    {firebase =>
                        <SubscriptionList sub={subscription} login = {login} firebase = {firebase}/>
                    }
                </FirebaseContext.Consumer>
            </div>
        </div>
    )
}

export default UserPage