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

    return (
        <div className={style.background}>
            <div className={style.container}>
                <NavigationBar login = {login}/>
                <FirebaseContext.Consumer>
                    {firebase =>
                        <UserProfile email={login.email} userId={login.userId} firebase = {firebase}/>
                    }
                </FirebaseContext.Consumer>
                <div>
                    <div className={style.subText}>SUBSCRIPTIONS</div>
                    <FirebaseContext.Consumer>
                        {firebase =>
                            <SubscriptionList login = {login} firebase = {firebase}/>
                        }
                    </FirebaseContext.Consumer>
                </div>
            </div>
        </div>
    )
}

export default UserPage